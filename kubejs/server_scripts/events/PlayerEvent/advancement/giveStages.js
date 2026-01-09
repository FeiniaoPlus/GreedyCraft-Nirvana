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

PlayerEvents.advancement("greedycraft:stages/getting_started", event => {
    let player = event.player
    AStages.addStageToPlayer("getting_started", player)
})

PlayerEvents.advancement("greedycraft:stages/twilight_forest", event => {
    let player = event.player
    AStages.addStageToPlayer("twilight_forest", player)
})

PlayerEvents.advancement("greedycraft:stages/twilight_shield", event => {
    let player = event.player
    AStages.addStageToPlayer("twilight_shield", player)
})