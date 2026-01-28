// 根据游戏特征给予对应进度

PlayerEvents.advancement("greedycraft:stages/init", event => {
    let player = event.player
    let server = event.server
    let playerName = player.username

    // 判断服务器上是否有 init_creative 阶段
    if (AStages.serverHasStage("init_creative", server)) {
        // 如果有，判断玩家是否没有 init_creative 阶段
        if (!(AStages.playerHasStage("init_creative", player))) {
            // 给予玩家 init_creative 进度
            event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_creative`)
            // 给予玩家全部阶段
            global.stageList.forEach(stage => {
                server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/${stage}`)
            });
        }
        // 如果没有，则判断服务器是否有 init_start 阶段
    } else if (AStages.serverHasStage("init_start", server)) {
        // 如果有，判断玩家是否没有 init_start 阶段
        if (!(AStages.playerHasStage("init_creative", player))) {
            // 给予玩家 init_start 进度
            event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_start`)
        }
        // 如果以上两个阶段服务器都没有，则判定这是一个新世界
        // 通过第一个进入的玩家来决定该存档的游戏模式
        // 如果玩家没有 init_creative || init_start 阶段并且处于创造模式则是以创造模式创建的存档，给予玩家 init_creative 进度并给予全部阶段
    } else if (!(AStages.playerHasStage("init_creative", player)) && !(AStages.playerHasStage("init_start", player)) && player.isCreative()) {
        // 给予服务器 init_creative阶段
        AStages.addStageToServer("init_creative", server)
        // 给予玩家 init_creative 进度
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_creative`)
        // 给予玩家全部阶段
        global.stageList.forEach(stage => {
            server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/${stage}`)
        });
    } else {
        // 否则是以生存或冒险模式创建的存档
        // 给予服务器 init_start 阶段
        AStages.addStageToServer("init_start", server)
        // 给予玩家 init_start 进度
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_start`)
    }
})
