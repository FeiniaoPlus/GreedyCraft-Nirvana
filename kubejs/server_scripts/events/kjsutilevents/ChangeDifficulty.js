// 进入维度增加难度

KJSutilEvents.playerLoggedInDimension(event => {
    let server = event.player.server
    let player = event.player
    let playerName = player.username
    let loggedInDimension = event.loggedIn

    Object.entries(global.dimensionDifficulty).forEach(([dimension, difficulty]) => {
        if (loggedInDimension == dimension) {
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
            server.runCommandSilent(`ps_difficulty add ${playerName} -${difficulty}`)
        }
    })
})