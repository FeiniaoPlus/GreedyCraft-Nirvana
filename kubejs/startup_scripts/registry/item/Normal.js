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
})
