// priority: 900

// 注册普通物品
StartupEvents.registry("item", event => {
    event.create("greedycraft:logo")
    event.create("greedycraft:placeholder")
    event.create("greedycraft:twilight_gem")
        .glow(true)
        .tooltip(Component.translatable("greedycraft.item.twilight_gem.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.twilight_gem.tooltip.2.text"))
    event.create("greedycraft:twilight_shield")
        .glow(true)
        .tooltip(Component.translatable("greedycraft.item.twilight_shield.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.twilight_shield.tooltip.2.text"))
    event.create("greedycraft:creative_soul")
        .glow(true)
        .tooltip(Component.translatable("greedycraft.item.creative_soul.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.creative_soul.tooltip.2.text"))
    event.create("greedycraft:ender_charm")
        .tooltip(Component.translatable("greedycraft.item.ender_charm.tooltip.1.text"))
        .tooltip(Component.translatable("greedycraft.item.ender_charm.tooltip.2.text"))
})
