// 物品右键事件

ItemEvents.rightClicked("greedycraft:twilight_shield", event => {
    let player = event.player
    let playerName = player.username
    let server = event.server

    // 将物品减1
    event.item.shrink(1)

    // 给予暮色庇护进度
    server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/twilight_shield`)

    // 生成粒子
    server.runCommandSilent(`execute at ${playerName} run particle minecraft:totem_of_undying ~ ~ ~ 2 2 2 5 1000 force`)
    console.log(`Give ${playerName} for greedycraft:stages/twilight_shield Advancement`)
})

ItemEvents.rightClicked("greedycraft:ender_charm", event => {
    let player = event.player
    let playerName = player.username
    let server = event.server

    // 将物品减1
    event.item.shrink(1)

    // 给予终末之路进度
    server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/ender_charm`)

    // 生成粒子
    server.runCommandSilent(`execute at ${playerName} run particle minecraft:totem_of_undying ~ ~ ~ 2 2 2 5 1000 force`)
    console.log(`Give ${playerName} for greedycraft:stages/twilight_shield Advancement`)
})
