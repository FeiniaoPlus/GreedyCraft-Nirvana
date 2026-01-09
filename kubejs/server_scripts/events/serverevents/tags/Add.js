// priority: 1000

ServerEvents.tags("item", event => {
    event.add("c:player_workstations/crafting_tables", [
        'actuallyadditions:crafter_on_a_stick',
        'tofucraft:tf_crafter',
        'avaritia:compressed_crafting_table',
        'avaritia:double_compressed_crafting_table',
        'avaritia:sculk_crafting_table',
        'avaritia:nether_crafting_table',
        'avaritia:end_crafting_table',
        'avaritia:extreme_crafting_table'
    ])
    Item.getList().forEach(item => {
        if (item.id.match(/^rechiseled.*planks/)) {
            event.add("c:blocks/planks", item.id)
        }
        if (item.id.match(/.*quartz_block.*/)) {
            event.add("c:blocks/quartz_block", item.id)
        }
    })
    event.add("c:blocks/planks", [
        'defiled_lands_reborn:tenebra_planks',
        'twilightforest:encased_towerwood'
    ])
})

ServerEvents.tags("block", event => {
    event.add("c:player_workstations/crafting_tables", [
        'tofucraft:tf_crafter',
        'avaritia:compressed_crafting_table',
        'avaritia:double_compressed_crafting_table',
        'avaritia:sculk_crafting_table',
        'avaritia:nether_crafting_table',
        'avaritia:end_crafting_table',
        'avaritia:extreme_crafting_table'
    ])
})
