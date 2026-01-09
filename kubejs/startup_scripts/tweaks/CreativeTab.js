// priority: 700

// 修改创造模式菜单名称

StartupEvents.modifyCreativeTab("kubejs:greedycraft_material", event => {
    event.displayName = Text.darkAqua(Component.translatable("greedycraft.creativetab.greedycraft_material.name"))
})
StartupEvents.modifyCreativeTab("kubejs:greedycraft_ore", event => {
    event.displayName = Text.darkAqua(Component.translatable("greedycraft.creativetab.greedycraft_ore.name"))
})
StartupEvents.modifyCreativeTab("kubejs:greedycraft_block", event => {
    event.displayName = Text.darkAqua(Component.translatable("greedycraft.creativetab.greedycraft_block.name"))
})