// priority: 300

// 玩家进入游戏时给予基础进度
PlayerEvents.loggedIn(event => {
    let player = event.player
    let playerName = player.username
    // 判断玩家是否有 init 阶段
    if (!(AStages.playerHasStage("init", player))) {
        // 如果没有则判断为新玩家，并给予 init 进度
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:init`)
        LOGGER("info", `New Player ${playerName} Join the Game`)
    }
})

// 根据游戏特征给予对应进度
PlayerEvents.advancement("greedycraft:init", event => {
    let player = event.player
    let playerName = player.username
    // 如果玩家没有 init_creative、init_start 阶段并且处于创造模式则是以创造模式创建的存档，给予玩家 init_creative 进度
    if (!(AStages.playerHasStage("init_creative", player)) && !(AStages.playerHasStage("init_start", player)) && player.isCreative()) {
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_creative`)
        LOGGER("info", `Give ${playerName} for greedycraft:stages/init_creative Advancement`)
    } else {
        // 否则是以生存或冒险模式创建的存档，给予 init_start 进度
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_start`)
        LOGGER("info", `Give ${playerName} for greedycraft:stages/init_start Advancement`)
    }
})