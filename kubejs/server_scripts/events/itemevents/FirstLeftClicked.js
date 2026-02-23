// 物品首次左键事件

// 难度调节器
ItemEvents.firstLeftClicked("greedycraft:difficulty_changer", event => {
    let server = event.server
    let playerName = event.player.username

    // 减少10难度
    server.runCommandSilent(`ps_difficulty add ${playerName} -10`)
})

// 创造模式控制器
ItemEvents.firstLeftClicked("greedycraft:creative_controller", event => {
    let server = event.server
    let playerName = event.player.username

    server.runCommandSilent(`gamemode survival ${playerName}`)
})
