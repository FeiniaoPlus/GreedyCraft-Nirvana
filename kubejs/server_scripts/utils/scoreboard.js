// priority: 1000

// 函数：获取用于计分板的游戏模式项文本，返回 MutableComponent。要求提供整合包模式以及 event.player 两个形参
function getScoreBoardGameMode(packMode, player) {
    let cheat = checkCheat(player)
    let gameMode = Component.translatable(`greedycraft.packmode.${packMode}`).append(Component.translatable("greedycraft.scoreboard.packmode.name"))

    if (cheat) {
        if (packMode == "casual") {
            let unofficialModList = checkModList()
            if (!(unofficialModList.length == 0)) {
                gameMode = gameMode.append(Component.string("§7·").append(Component.translatable("greedycraft.scoreboard.packmode.cheat")))
            }
        } else {
            gameMode = gameMode.append(Component.string("§7·").append(Component.translatable("greedycraft.scoreboard.packmode.cheat")))
        }
    } else if (AStages.playerHasStage("init_creative", player)) {
        gameMode = gameMode.append(Component.string("§7·").append(Component.translatable("greedycraft.scoreboard.packmode.creative")))
    }

    return gameMode
}