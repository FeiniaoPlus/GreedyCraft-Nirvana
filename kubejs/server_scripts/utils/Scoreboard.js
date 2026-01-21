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

// 函数：用于添加计分板，要求提供 event.player 以及 event.server 两个形参
function addScoreBoard(player, server) {
    let cheat = checkCheat(player)
    let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")
    let packName = Component.translatable("greedycraft.modpack.name").append(Component.string(` §a§lv${global.localPackVersionName}`)).getString()
    let original = Component.translatable("greedycraft.scoreboard.original").getString()
    let author = Component.translatable("greedycraft.scoreboard.author").getString()

    let gameMode = getScoreBoardGameMode(packMode, player).getString()

    server.runCommandSilent(`scoreboard objectives add packinfo dummy "${packName}"`)
    server.runCommandSilent("scoreboard objectives modify packinfo numberformat blank")
    server.runCommandSilent("scoreboard players set original packinfo 4")
    server.runCommandSilent("scoreboard players set author packinfo 3")
    server.runCommandSilent("scoreboard players set air packinfo 2")
    server.runCommandSilent("scoreboard players set gamemode packinfo 1")
    server.runCommandSilent(`scoreboard players display name original packinfo "${original}"`)
    server.runCommandSilent(`scoreboard players display name author packinfo "${author}"`)
    server.runCommandSilent('scoreboard players display name air packinfo ""')
    server.runCommandSilent(`scoreboard players display name gamemode packinfo "${gameMode}"`)
    server.runCommandSilent("scoreboard objectives setdisplay sidebar packinfo")
}