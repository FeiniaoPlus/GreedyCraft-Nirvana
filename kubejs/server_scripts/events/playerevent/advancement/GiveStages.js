// 根据解锁的进度给予玩家对应阶段

PlayerEvents.advancement(event => {
    let player = event.player
    let advancementNamespace = event.advancement.id.getNamespace()
    let advancementPath = event.advancement.id.getPath().toString()

    // 判断进度的命名空间是否是greedycraft
    if (advancementNamespace == "greedycraft") {
        // 判断进度路径开头是否是stages/
        if (advancementPath.startsWith("stages/")) {
            // 截断多余字符
            let stage = advancementPath.replace("stages/", "")
            // 判断该阶段是否已解锁
            if (!(AStages.playerHasStage(stage, player))) {
                // 给予玩家进度
                AStages.addStageToPlayer(stage, player)
                // 播放声音
                player.playNotifySound("minecraft:ui.toast.challenge_complete", "music", 1.0, 1.0)
            }
        }
    }
})
