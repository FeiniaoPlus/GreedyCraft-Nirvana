// priority: 900

// 注册工具类物品
StartupEvents.registry("item", event => {
    // 简易手斧
    event.create("greedycraft:crude_hatchet", "kubejs:axe")
        .tier("wood")
        .attackDamageBonus(7.0)
        .speed(0.8)
        .tooltip(Component.translatable("greedycraft.item.crude_hatchet.tooltip.1.text"))
    // 一拳
    event.create("greedycraft:one_punch", "kubejs:sword")
        .maxStackSize(1)
        .tier("one_punch")
        .attackDamageBaseline(999999999.0)
        .tooltip(Component.translatable("greedycraft.item.one_punch.tooltip.1.text"))
    
})