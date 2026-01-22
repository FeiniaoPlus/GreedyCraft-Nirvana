// priority: 1000

// 添加Tag
ServerEvents.tags("item", event => {
    event.add("c:player_workstations/crafting_tables", [
        "actuallyadditions:crafter_on_a_stick",
        "tofucraft:tf_crafter",
    ])
    event.add("c:blocks/end_stone", "minecraft:end_stone")
    // 获取全局物品注册表
    Item.getList().forEach(item => {
        // 判断物品是否满足正则条件：rechiseled: 开头，包含 planks
        if (item.id.match(/^rechiseled:.*planks/)) {
            event.add("c:blocks/planks", item.id)
        }
        // 判断物品是否满足正则条件：chisel: 开头，包含 planks
        if (item.id.match(/^chisel:.*planks/)) {
            event.add("c:blocks/planks", item.id)
        }
        // 判断物品是否满足正则条件：rechiseled: 开头，包含 end_stone
        if (item.id.match(/^rechiseled:.*end_stone/)) {
            event.add("c:blocks/end_stone", item.id)
        }
        // 判断物品是否满足正则条件：包含 planks
        if (item.id.match(/.*quartz_block.*/)) {
            event.add("c:blocks/quartz_block", item.id)
        }
    })
    event.add("c:blocks/planks", [
        "defiled_lands_reborn:tenebra_planks",
        "twilightforest:encased_towerwood"
    ])
    Object.entries(global.mysticalAgricultureSeedLevelMap).forEach(([seed, level]) => {
        event.add(`greedycraft:mysticalagriculture_level_${level}`, seed)
    })
})