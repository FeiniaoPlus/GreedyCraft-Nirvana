ServerEvents.recipes(event => {
    event.shapeless('greedycraft:grass_string', 
        ['greedycraft:plant_fibre', 
        'greedycraft:plant_fibre',
         'greedycraft:plant_fibre']
    )
})
ServerEvents.recipes(event => {
    event.shapeless('greedycraft:crude_hatchet',
        ['greedycraft:pebble',
         'greedycraft:grass_string',
         'minecraft:stick']
    )
})