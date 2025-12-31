AStageEvents.added(event => {
    let player = event.player
    let stage = event.stage
    let packLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.language")
    let borderText = "§9§l=================================================="
    let stageUnlockTitleMessage = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.stage.unlock.title")
    let stageUnlockMessage = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.stage.unlock.message")
    let stageUnlockMessageData

    switch (packLanguage) {
        case "zh_cn":
            stageUnlockMessageData = global.zh_cn_StagesUnlock_Message[stage]
            break
        case "en_us":
            stageUnlockMessageData = global.en_us_StagesUnlock_Message[stage]
            break
        default:
            stageUnlockMessageData = global.en_us_StagesUnlock_Message[stage]
    }

    if (!(stage == "init_start" || stage == "init_creative")) {
        player.tell(borderText)
        player.tell(stageUnlockTitleMessage)
        stageUnlockMessageData.title.forEach(message => player.tell(`§6§o${stage}§r  - ${message}`))
        stageUnlockMessageData.lore.forEach(message => player.tell(`${message}`))
        player.tell(stageUnlockMessage)
        stageUnlockMessageData.unlock.forEach(message => player.tell(`§2✔ §r${message}`))
        player.tell(borderText)
    }
})