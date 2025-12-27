// 拦截命令
ServerEvents.command(event => {
    let command = event.commandName
    let commandSource = event.parseResults.context.source
    let player = commandSource.getPlayer()

    let antiCheatMode = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheatMode")
    let packLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.language")
    let antiCheat = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheat")

    let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.anticheat.text")

    // 判断执行命令的是否是玩家
    if (commandSource.isPlayer()) {
        let playerUUID = player.uuid.toString()
        let playerName = player.username
        // 判断玩家 UUID 是否在开发者列表之外
        if (!(global.creatorList.includes(playerUUID))) {
            // 判断是否是以创造模式创建的存档
            if (!(AStages.playerHasStage("init_creative", player))) {
                // 判断反作弊是否开启
                if (antiCheat == "true") {
                    // 判断反作弊模式是否为冒险模式
                    if (antiCheatMode == "adventure") {
                        // 判断执行的命令是否在黑名单里
                        if (global.commandBlackList.includes(command)) {
                            // 发送消息并取消
                            event.server.tell(`${message}${command}`)
                            LOGGER("warn", `The Player Tried to Execute an Illegal Command: ${command}.\nPlayer Name: ${playerName}\nPlayer UUID: ${playerUUID}`)
                            event.cancel()
                        }
                        // 判断反作弊模式模式是否为专家模式
                    } else if (antiCheatMode == "expert") {
                        // 判断执行的命令是否不在白名单里
                        if (!(global.commandWhiteList.includes(command))) {
                            // 发送消息并取消
                            event.server.tell(`${message}${command}`)
                            LOGGER("warn", `The Player Tried to Execute an Illegal Command: ${command}.\nPlayer Name: ${playerName}\nPlayer UUID: ${playerUUID}`)
                            event.cancel()
                        }
                    }
                }
            }
        }
    }
})