// 玩家解锁阶段发送消息

AStageEvents.added(event => {
    let player = event.player
    let stage = event.stage
    let packLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.language")
    let borderText = "§9§l=================================================="
    let stageUnlockMessageData

    // 根据整合包语言获取阶段对应消息
    switch (packLanguage) {
        case "zh_cn":
            stageUnlockMessageData = global.zh_cn_StagesUnlock_Message[stage]
            break;
        case "en_us":
            stageUnlockMessageData = global.en_us_StagesUnlock_Message[stage]
            break;
        default:
            stageUnlockMessageData = global.en_us_StagesUnlock_Message[stage]
    }

    // 排除掉基础阶段
    if (!(stage == "init_start" || stage == "init_creative")) {
        if (!(AStages.playerHasStage("init_creative", player))) {
            player.tell(borderText)
            player.tell(Component.translatable("greedycraft.message.stage.unlock.title"))
            stageUnlockMessageData.title.forEach(message => player.tell(`§6§o${stage}§r  - ${message}`))
            stageUnlockMessageData.lore.forEach(message => player.tell(`${message}`))
            player.tell(Component.translatable("greedycraft.message.stage.unlock.message"))
            stageUnlockMessageData.unlock.forEach(message => player.tell(`§2✔ §r${message}`))
            player.tell(borderText)
        }
    }
})