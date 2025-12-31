// priority: 400

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