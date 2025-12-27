// 注册切换整合包模式命令

// 设置默认执行权限为 4 级
let permissions = 4

let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")
let packLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.language")

// 判断运行环境
if (Platform.isClientEnvironment) {
    permissions = 2
} else {
    permissions = 4
}

// 切换休闲模式
ServerEvents.basicCommand("setPackModeToCasual", event => {
    let player = event.player
    let playerName = player.username
    LOGGER("info", `${playerName} Change PackMode to casual`)
    // 如果权限小于上面设置的值则发送提醒并return
    if (player.hasPermissions(permissions)) {
        if (packMode == "casual") {
            let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.setpackmode.noupdate")
            player.tell(message)
            return 0
        }
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.packMode", "casual");
        // 热重载
        event.server.runCommandSilent("kubejs reload client-scripts")
        event.server.runCommandSilent("kubejs reload server-scripts")
        event.server.runCommandSilent("reload")
        let message = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.setpackmode") +
            KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.packmode.casual")
        player.tell(message)
        // 修改计分板
        let gameMode = getScoreBoardGameMode(packLanguage, packMode, player)
        event.server.runCommandSilent(`scoreboard players display name gamemode packinfo "${gameMode}"`)
    } else {
        player.tell(KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.error.permissions"))
        LOGGER("info", `${playerName} Change Packmode Error: No Permissions`)
    }
});

// 切换冒险模式
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
        let gameMode = getScoreBoardGameMode(packLanguage, packMode, player)
        event.server.runCommandSilent(`scoreboard players display name gamemode packinfo "${gameMode}"`)
    } else {
        player.tell(KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.error.permissions"))
    }
});

// 切换专家模式
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
        let gameMode = getScoreBoardGameMode(packLanguage, packMode, player)
        event.server.runCommandSilent(`scoreboard players display name gamemode packinfo "${gameMode}"`)
    } else {
        player.tell(KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.commands.error.permissions"))
        LOGGER("info", `${playerName} Change Packmode Error: No Permissions`)
    }
});