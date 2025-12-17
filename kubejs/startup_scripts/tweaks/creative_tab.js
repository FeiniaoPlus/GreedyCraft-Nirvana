// priority: 50

StartupEvents.modifyCreativeTab("kubejs:greedycraft_material", event => {
    let name = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.creativetab.greedycraft_material.name")
    event.displayName = Text.darkAqua(name)
})
StartupEvents.modifyCreativeTab("kubejs:greedycraft_ore", event => {
    let name = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.creativetab.greedycraft_ore.name")
    event.displayName = Text.darkAqua(name)
})
StartupEvents.modifyCreativeTab("kubejs:greedycraft_block", event => {
    let name = KJSutils.Analysis(`kubejs/assets/greedycraft/lang/${packLanguage}.json`, "$$.greedycraft.creativetab.greedycraft_block.name")
    event.displayName = Text.darkAqua(name)
})