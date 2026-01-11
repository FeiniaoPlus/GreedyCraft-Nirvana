// priority: 150

// 玩家进入游戏时给予基础进度
PlayerEvents.loggedIn(event => {
    let player = event.player
    let server = event.server
    let playerName = player.username
    // 判断玩家是否有 init 阶段
    if (!(AStages.playerHasStage("init", player))) {
        // 如果没有则判断为新玩家，并给予 init 进度
        server.runCommandSilent(`advancement grant ${playerName} only greedycraft:init`)
        console.log(`New Player ${playerName} Join the Game`)
    }
    // 创造模式创建的存档给予全部阶段进度
    if (AStages.playerHasStage("init_creative", player)) {
        global.stageList.forEach(stage => {
            server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/${stage}`)
        });
    }
})
