// 根据解锁的进度给予玩家对应阶段

// 根据游戏特征给予对应进度
PlayerEvents.advancement("greedycraft:init", event => {
    let player = event.player
    let playerName = player.username
    // 如果玩家没有 init_creative、init_start 阶段并且处于创造模式则是以创造模式创建的存档，给予玩家 init_creative 进度
    if (!(AStages.playerHasStage("init_creative", player)) && !(AStages.playerHasStage("init_start", player)) && player.isCreative()) {
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_creative`)
        console.log(`Give ${playerName} for greedycraft:stages/init_creative Advancement`)
    } else {
        // 否则是以生存或冒险模式创建的存档，给予 init_start 进度
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_start`)
        console.log(`Give ${playerName} for greedycraft:stages/init_start Advancement`)
    }
})

PlayerEvents.advancement("greedycraft:init", event => {
    let player = event.player
    AStages.addStageToPlayer("init", player)
    player.playSound("minecraft:ui.toast.challenge_complete", 1.0, 1.0)
})

PlayerEvents.advancement("greedycraft:stages/init_start", event => {
    let player = event.player
    AStages.addStageToPlayer("init_start", player)
    player.playSound("minecraft:ui.toast.challenge_complete", 1.0, 1.0)
})

PlayerEvents.advancement("greedycraft:stages/init_creative", event => {
    let player = event.player
    AStages.addStageToPlayer("init_creative", player)
    player.playSound("minecraft:ui.toast.challenge_complete", 1.0, 1.0)
})

PlayerEvents.advancement("greedycraft:stages/getting_started", event => {
    let player = event.player
    AStages.addStageToPlayer("getting_started", player)
    player.playSound("minecraft:ui.toast.challenge_complete", 1.0, 1.0)
})

PlayerEvents.advancement("greedycraft:stages/twilight_forest", event => {
    let player = event.player
    AStages.addStageToPlayer("twilight_forest", player)
    player.playSound("minecraft:ui.toast.challenge_complete", 1.0, 1.0)
})

PlayerEvents.advancement("greedycraft:stages/twilight_shield", event => {
    let player = event.player
    AStages.addStageToPlayer("twilight_shield", player)
    player.playSound("minecraft:ui.toast.challenge_complete", 1.0, 1.0)
})

PlayerEvents.advancement("greedycraft:stages/nether", event => {
    let player = event.player
    AStages.addStageToPlayer("nether", player)
    player.playSound("minecraft:ui.toast.challenge_complete", 1.0, 1.0)
})

PlayerEvents.advancement("greedycraft:stages/gaia_killer", event => {
    let player = event.player
    AStages.addStageToPlayer("gaia_killer", player)
    player.playSound("minecraft:ui.toast.challenge_complete", 1.0, 1.0)
})

PlayerEvents.advancement("greedycraft:stages/wither_killer", event => {
    let player = event.player
    AStages.addStageToPlayer("wither_killer", player)
    player.playSound("minecraft:ui.toast.challenge_complete", 1.0, 1.0)
})

PlayerEvents.advancement("greedycraft:stages/fearless_man", event => {
    let player = event.player
    AStages.addStageToPlayer("fearless_man", player)
    player.playSound("minecraft:ui.toast.challenge_complete", 1.0, 1.0)
})

PlayerEvents.advancement("greedycraft:stages/ender_charm", event => {
    let player = event.player
    AStages.addStageToPlayer("ender_charm", player)
    player.playSound("minecraft:ui.toast.challenge_complete", 1.0, 1.0)
})