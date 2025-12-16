// priority: 400

ClientEvents.lang("en_us", (event) => {
    KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "en_us");
    LOGGER("info", "Change greedycraft config language for en_us")
    event.add("greedycraft.modepack.name", "§bGreedyCraft§7·§c§lNIRVANA")
    event.add("greedycraft.commands.setpackmode.noupdate", "§cYou are already using this mode.")
    event.add("greedycraft.commands.setpackmode", "§6Pack mode has been changed to: ")
    event.add("greedycraft.commands.error.permissions", "§cYou do not have permission to execute this command!")
    event.add("greedycraft.packmode.casual", "§aCasual")
    event.add("greedycraft.packmode.adventure", "§eAdventure")
    event.add("greedycraft.packmode.expert", "§c§lExpert")
    event.add("greedycraft.creativetab.greedycraft_material.name", "GreedyCraft Material")
    event.add("greedycraft.creativetab.greedycraft_ore.name", "GreedyCraft Ore")
    event.add("greedycraft.creativetab.greedycraft_block.name", "GreedyCraft Block")
    event.add("greedycraft.scoreboard.packmode.name", "Mode")
    event.add("greedycraft.scoreboard.packmode.cheat", "§c§lCheat Mode")
    event.add("greedycraft.scoreboard.original", "§e§lOriginal Author: §d§lTCreopargh")
    event.add("greedycraft.scoreboard.author", "§a§lReMake：: §d§lGCTN Team")
})