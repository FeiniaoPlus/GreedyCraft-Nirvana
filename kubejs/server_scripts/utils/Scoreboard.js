// priority: 1000

// 函数：获取用于计分板的游戏模式项文本，返回 MutableComponent。要求提供整合包模式以及 event.player 两个形参
function getScoreBoardGameMode(packMode, player) {
    let cheat = checkCheat(player)
    let gameMode = Component.translatable(`greedycraft.packmode.${packMode}`).append(Component.translatable("greedycraft.scoreboard.packmode.name"))

    // 判断是否作弊
    if (cheat) {
        // 判断游戏模式是否等于休闲模式
        if (packMode == "casual") {
            let unofficialModList = checkModList()
            // 判断是否存在非官方模组
            if (!(unofficialModList.length == 0)) {
                // 休闲模式只在存在非官方模组时才判定为作弊
                gameMode = gameMode.append(Component.string("§7·").append(Component.translatable("greedycraft.scoreboard.packmode.cheat")))
            }
        } else {
            gameMode = gameMode.append(Component.string("§7·").append(Component.translatable("greedycraft.scoreboard.packmode.cheat")))
        }
    } else if (AStages.playerHasStage("init_creative", player)) {
        // 判断是否是以创造模式创建的存档
        gameMode = gameMode.append(Component.string("§7·").append(Component.translatable("greedycraft.scoreboard.packmode.creative")))
    }

    // 返回
    return gameMode
}