// 进出维度更改难度

// 进入维度增加难度
KJSutilEvents.playerLoggedInDimension(event => {
    let server = event.player.server
    let player = event.player
    let playerName = player.username
    let loggedInDimension = event.loggedIn

    // 获取维度与难度的对应关系
    Object.entries(global.dimensionDifficulty).forEach(([dimension, difficulty]) => {
        // 判断进入的哪个维度
        if (loggedInDimension == dimension) {
            // 增加难度
            server.runCommandSilent(`ps_difficulty add ${playerName} ${difficulty}`)
        }
    })
})

// 离开维度恢复难度
KJSutilEvents.playerLoggedOutDimension(event => {
    let server = event.player.server
    let player = event.player
    let playerName = player.username
    let loggedOutDimension = event.loggedOut

    Object.entries(global.dimensionDifficulty).forEach(([dimension, difficulty]) => {
        if (loggedOutDimension == dimension) {
            // 增加难度，但是难度为负数，所以就变成减了
            server.runCommandSilent(`ps_difficulty add ${playerName} -${difficulty}`)
        }
    })
})