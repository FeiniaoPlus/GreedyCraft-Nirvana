PlayerEvents.loggedIn(event => {
    let player = event.player
    let cheat = false
    let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")
    let packLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.language")
    let unofficialModList = checkModList()

    if (unofficialModList.length > 0) {
        cheat = true
    }
    if (player.isCreative) {
        cheat = true
    }

    let packName = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.modpack.name") + ` v${global.localPackVersionName}`
    let original = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.scoreboard.original")
    let author = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.scoreboard.author")
    let gameMode = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, `$$.greedycraft.packmode.${packMode}`)
    + KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.scoreboard.packmode.name")

    if (cheat) {
        gameMode = gameMode + "§7·" + KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.scoreboard.packmode.cheat")
    }

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