// priority: 400

ClientEvents.lang("zh_cn", (event) => {
    KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "zh_cn");
    LOGGER("info", "Change greedycraft config language for zh_cn")
    event.add("greedycraft.modepack.name", "§b贪婪整合包§7·§c§l涅槃")
    event.add("greedycraft.commands.setpackmode.noupdate", "§c当前已处于该模式")
    event.add("greedycraft.commands.setpackmode", "§6已修改整合包模式为: ")
    event.add("greedycraft.commands.error.permissions", "§c你没有权限执行该命令！")
    event.add("greedycraft.packmode.casual", "§a休闲")
    event.add("greedycraft.packmode.adventure", "§e冒险")
    event.add("greedycraft.packmode.expert", "§c§l专家")
    event.add("greedycraft.creativetab.greedycraft_material.name", "贪婪整合包·材料")
    event.add("greedycraft.creativetab.greedycraft_ore.name", "贪婪整合包·矿石")
    event.add("greedycraft.creativetab.greedycraft_block.name", "贪婪整合包·方块")
    event.add("greedycraft.scoreboard.packmode.name", "模式")
    event.add("greedycraft.scoreboard.packmode.cheat", "§c§l作弊模式")
    event.add("greedycraft.scoreboard.original", "§e§l原作者: §d§lTCreopargh")
    event.add("greedycraft.scoreboard.author", "§a§l重置：: §d§lGCTN 团队")
})