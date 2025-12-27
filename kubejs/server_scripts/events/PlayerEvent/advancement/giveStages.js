// 根据解锁的进度给予玩家对应阶段

PlayerEvents.advancement("greedycraft:init", event => {
    let player = event.player
    AStages.addStageToPlayer("init", player)
})

PlayerEvents.advancement("greedycraft:stages/init_start", event => {
    let player = event.player
    AStages.addStageToPlayer("init_start", player)
})

PlayerEvents.advancement("greedycraft:stages/init_creative", event => {
    let player = event.player
    AStages.addStageToPlayer("init_creative", player)
})