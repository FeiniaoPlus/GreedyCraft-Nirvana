// priority: 950

// 注册自定义等级
ItemEvents.toolTierRegistry(event => {
    event.add("one_punch", tier => {
        tier.uses = 0
        tier.speed = 20.0
        tier.attackDamageBonus = 0
        tier.enchantmentValue = 10
    })
})