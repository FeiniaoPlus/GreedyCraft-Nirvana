// priority: 500

// 函数：获取用于计分板的游戏模式项文本，返回字符串。要求提供整合包语言和整合包模式以及 event.player 三个形参
function getScoreBoardGameMode(packLanguage, packMode, player) {
    let cheat = checkCheat(player)
    let gameMode = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, `$$.greedycraft.packmode.${packMode}`) +
        KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.scoreboard.packmode.name")

    if (cheat) {
        if (packMode == "casual") {
            let unofficialModList = checkModList()
            if (unofficialModList.length > 0) {
                gameMode = gameMode + "§7·" + KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.scoreboard.packmode.cheat")
            }
        } else {
            gameMode = gameMode + "§7·" + KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.scoreboard.packmode.cheat")
        }
    } else if (AStages.playerHasStage("init_creative", player)) {
        gameMode = gameMode + "§7·" + KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.scoreboard.packmode.creative")
    }

    return gameMode
}