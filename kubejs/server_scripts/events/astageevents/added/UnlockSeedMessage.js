// 玩家解锁阶段发送消息

AStageEvents.added(event => {
    let server = event.server
    let player = event.player
    let stage = event.stage
    let borderText = "§9§l=================================================="

    // 排除掉基础阶段
    if (!(stage == "init_start" || stage == "init_creative")) {
        // 非创造模式创建的存档才发送解锁消息
        if (!(AStages.serverHasStage("init_creative", server))) {
            let stageUnlockMessageData = global.stagesUnlock_Message[stage]

            player.tell(borderText)
            player.tell(Component.translatable("greedycraft.message.stage.unlock.title"))
            stageUnlockMessageData.title.forEach(message => player.tell(Component.string(`§6§o${stage}§r`).append(Component.string(" - ")).append(Component.translatable(message))))
            stageUnlockMessageData.lore.forEach(message => player.tell(Component.translatable(message)))
            player.tell(Component.translatable("greedycraft.message.stage.unlock.message"))
            stageUnlockMessageData.unlock.forEach(message => player.tell(Component.string("§2✔ §r").append(Component.translatable(message))))
            player.tell(borderText)
        }
    }
})