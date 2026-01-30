// priority: 100

// 创建初始计分板
PlayerEvents.loggedIn(event => {
    let player = event.player
    let server = event.server
    
    let scoreboard = server.scoreboard.getObjective("packinfo")

    if (scoreboard != null) {
        server.runCommandSilent("scoreboard objectives remove packinfo")
    }

    addScoreBoard(player, server)
})