// 根据游戏特征给予对应进度

PlayerEvents.advancement("greedycraft:stages/init", event => {
    let player = event.player
    let playerName = player.username
    // 如果玩家没有 init_creative、init_start 阶段并且处于创造模式则是以创造模式创建的存档，给予玩家 init_creative 进度并给予全部阶段
    if (!(AStages.playerHasStage("init_creative", player)) && !(AStages.playerHasStage("init_start", player)) && player.isCreative()) {
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_creative`)
        global.stageList.forEach(stage => {
            server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/${stage}`)
        });
        console.log(`Give ${playerName} for greedycraft:stages/init_creative Advancement`)
    } else {
        // 否则是以生存或冒险模式创建的存档，给予 init_start 进度
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_start`)
        console.log(`Give ${playerName} for greedycraft:stages/init_start Advancement`)
    }
})
