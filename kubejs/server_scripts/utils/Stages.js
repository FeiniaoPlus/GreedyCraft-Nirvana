// priority: 1000

// 函数：给玩家添加所有阶段与进度
function givePlayerAllStage(server, player) {
    let playerName = player.username

    Object.entries(global.stageListMap).forEach(([stageName, data]) => {
        server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/${stageName}`)
    })
}

// 函数：删除玩家所有阶段与进度
function givePlayerAllStage(server, player) {
    let playerName = player.username

    Object.entries(global.stageListMap).forEach(([stageName, data]) => {
        server.runCommandSilent(`advancement revoke ${playerName} only greedycraft:stages/${stageName}`)
        AStages.removeStageFromPlayer(stageName, player)
    })
}