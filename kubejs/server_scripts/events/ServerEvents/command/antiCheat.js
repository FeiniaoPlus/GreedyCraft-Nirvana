ServerEvents.command(event => {
    let command = event.commandName
    
    let antiCheatMode = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheatMode")
    let packLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.language")
    let antiCheat = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheat")

    let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.message.anticheat.text")

    if (antiCheat) {
        if (antiCheatMode == "adventure") {
            if (global.commandBlackList.has(command)) {
                event.server.tell(`${message} + ${command}`)
                event.cancel()
            }
        } else if (antiCheatMode == "expert") {
            if (global.commandWhiteList.has(command)) {
                event.server.tell(`${message} + ${command}`)
                event.cancel()
            }
        }
    }
})