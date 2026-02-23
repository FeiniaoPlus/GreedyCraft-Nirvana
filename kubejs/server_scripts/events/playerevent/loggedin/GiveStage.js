// priority: 900

// 玩家进入游戏时给予阶段
PlayerEvents.loggedIn(event => {
    let player = event.player

    let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

    if (packMode == "expert") {
        AStages.addStageToPlayer("expert", player)
    }
})