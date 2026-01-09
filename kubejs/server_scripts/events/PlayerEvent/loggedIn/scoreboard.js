// priority: 100

PlayerEvents.loggedIn(event => {
    let player = event.player
    let cheat = checkCheat(player)
    let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")
    let packName = Component.translatable("greedycraft.modpack.name").append(Component.string(` §a§lv${global.localPackVersionName}`)).getString()
    let original = Component.translatable("greedycraft.scoreboard.original").getString()
    let author = Component.translatable("greedycraft.scoreboard.author").getString()

    let gameMode = getScoreBoardGameMode(packMode, player).getString()

    event.server.runCommandSilent("scoreboard objectives remove packinfo")
    event.server.runCommandSilent(`scoreboard objectives add packinfo dummy "${packName}"`)
    event.server.runCommandSilent("scoreboard objectives modify packinfo numberformat blank")
    event.server.runCommandSilent("scoreboard players set original packinfo 4")
    event.server.runCommandSilent("scoreboard players set author packinfo 3")
    event.server.runCommandSilent("scoreboard players set air packinfo 2")
    event.server.runCommandSilent("scoreboard players set gamemode packinfo 1")
    event.server.runCommandSilent(`scoreboard players display name original packinfo "${original}"`)
    event.server.runCommandSilent(`scoreboard players display name author packinfo "${author}"`)
    event.server.runCommandSilent('scoreboard players display name air packinfo ""')
    event.server.runCommandSilent(`scoreboard players display name gamemode packinfo "${gameMode}"`)
    event.server.runCommandSilent("scoreboard objectives setdisplay sidebar packinfo")
})