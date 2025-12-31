// priority: 200

// 进入游戏是发送初始消息
PlayerEvents.loggedIn(event => {
    let player = event.player
    let playerName = event.player.username
    let cheat = checkCheat(player)

    let antiCheatMode = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheatMode")
    let antiCheat = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheat")
    let packLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.language")

    let messageTitle = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.playerlogging.system.title")
    let messageText1 = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.playerlogging.system.text.1") + `§6${playerName}`
    let messageText2 = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.playerlogging.system.text.2")
    let messageText3 = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.playerlogging.system.text.3")
    let messageText4 = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.playerlogging.system.text.4")
    let messageText5 = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.playerlogging.system.text.5")
    let messageText6 = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.playerlogging.system.text.6")
    let messageText7 = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.playerlogging.system.text.7")
    let messageText8 = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.playerlogging.system.text.8")
    let messageText9 = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.playerlogging.system.text.9")
    let messageEnd = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.playerlogging.system.text.end")

    let message
    let unofficialModList = checkModList()
    // 判断玩家是否没有 init 阶段
    if (!(AStages.playerHasStage("init", player))) {
        // 没有则是第一次进入游戏，发送消息
        player.tell(messageTitle)
        player.tell(messageText1)
        player.tell(messageText2)
        player.tell(messageText3)
        player.tell(messageText4)
        player.tell(messageText5)
        player.tell(messageText6)
        player.tell(messageText7)
        player.tell(messageText8)
        player.tell(messageText9)
        player.tell(messageEnd)
    } else {
        // 根据整合包语言获取对应数组的文本（startup_scripts\global\i18n\xx_xx.js）
        switch (packLanguage) {
            case "zh_cn":
                message = global.zh_cn_PlayerLogging_Message[randomInt(0, global.zh_cn_PlayerLogging_Message.length - 1)]
                break
            case "en_us":
                message = global.en_us_PlayerLogging_Message[randomInt(0, global.en_us_PlayerLogging_Message.length - 1)]
                break
            default:
                message = global.en_us_PlayerLogging_Message[randomInt(0, global.en_us_PlayerLogging_Message.length - 1)]
        }

        player.tell(message)
    }

    // 判断反作弊是否开启
    if (antiCheat == "true") {
        let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.anticheat.runing.text")
        player.tell(`${message}${antiCheatMode}`)
    } else {
        let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.anticheat.off.text")
        player.tell(`${message}`)
    }

    // 判断是否作弊
    if (cheat) {
        // 判断作弊类型是否是安装了非官方模组并发送对应消息
        if (!(unofficialModList.length == 0)) {
            let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.cheat.modlist.text")
            player.tell(message)
            unofficialModList.forEach(modID => player.tell(modID))
            LOGGER("warn", `UnofficialModList: ${unofficialModList}`)
        } else if (!(player.isCreative)) {
            // 否则发送默认作弊消息
            let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.cheat.text")
            player.tell(message)
        }
        // 判断是否是创造模式创建的存档，发送对应消息
    }
    if (AStages.playerHasStage("init_creative", player)) {
        let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.creative.text")
        player.tell(message)
    }
})