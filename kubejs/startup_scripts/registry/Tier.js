// priority: 950

// 注册自定义等级
ItemEvents.toolTierRegistry(event => {
    event.add("pebble", tier => {
        tier.uses = 6
        tier.speed = 0.6
        tier.attackDamageBonus = 0.0
        tier.repairIngredient = "minecraft:cobblestone"
    })
    event.add("one_punch", tier => {
        tier.uses = 0
        tier.speed = 20.0
        tier.attackDamageBonus = 0.0
        tier.enchantmentValue = 10
    })
})