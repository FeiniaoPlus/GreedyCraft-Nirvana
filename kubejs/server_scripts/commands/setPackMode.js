let permissions = 4

let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")
let packLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.language")

if (Platform.isClientEnvironment) {
    permissions = 2
} else {
    permissions = 4
}

ServerEvents.basicCommand("setPackModeToCasual", event => {
    let player = event.player
    let playerName = player.username
    LOGGER("info", `${playerName} Change PackMode to casual`)
    if (player.hasPermissions(permissions)) {
        if (packMode == "casual") {
            let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.setpackmode.noupdate")
            player.tell(message)
            return 0
        }
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.packMode", "casual");
        event.server.runCommandSilent("kubejs reload client-scripts")
        event.server.runCommandSilent("kubejs reload server-scripts")
        event.server.runCommandSilent("reload")
        let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.setpackmode") +
            KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.packmode.casual")
        player.tell(message)
        packMode = "casual"
    } else {
        player.tell(KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.error.permissions"))
        LOGGER("info", `${playerName} Change Packmode Error: No Permissions`)
    }
});
ServerEvents.basicCommand("setPackModeToAdventure", event => {
    let player = event.player
    let playerName = player.username
    LOGGER("info", `${playerName} Change PackMode to adventure`)
    if (player.hasPermissions(permissions)) {
        if (packMode == "adventure") {
            let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.setpackmode.noupdate")
            player.tell(message)
            return 0
        }
        event.server.runCommandSilent("kubejs reload client-scripts")
        event.server.runCommandSilent("kubejs reload server-scripts")
        event.server.runCommandSilent("reload")
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.packMode", "adventure");
        let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.setpackmode") +
            KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.packmode.adventure")
            LOGGER("info", `${playerName} Change Packmode Error: No Permissions`)
        player.tell(message)
        packMode = "adventure"
    } else {
        player.tell(KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.error.permissions"))
    }
});
ServerEvents.basicCommand("setPackModeToExpert", event => {
    let player = event.player
    let playerName = player.username
    LOGGER("info", `${playerName} Change PackMode to expert`)
    if (player.hasPermissions(permissions)) {
        if (packMode == "expert") {
            let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.setpackmode.noupdate")
            player.tell(message)
            return 0
        }
        event.server.runCommandSilent("kubejs reload client-scripts")
        event.server.runCommandSilent("kubejs reload server-scripts")
        event.server.runCommandSilent("reload")
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.packMode", "expert");
        let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.setpackmode") +
            KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.packmode.expert")
        player.tell(message)
        packMode = "expert"
    } else {
        player.tell(KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.error.permissions"))
        LOGGER("info", `${playerName} Change Packmode Error: No Permissions`)
    }
});