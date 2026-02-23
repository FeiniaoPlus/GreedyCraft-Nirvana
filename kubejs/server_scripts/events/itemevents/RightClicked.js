// 物品右键事件

// 为拥有 unlock_stage tag的物品右键解锁对应进度
ItemEvents.rightClicked(event => {
    let player = event.player
    let playerName = player.username
    let server = event.server
    let item = event.item
    let tags = item.getTags()

    tags.forEach(tag => {
        if (tag.namespace == "greedycraft") {
            if (tag.path.toString().startsWith("unlock_stage/")) {
                let stage = tag.path.toString().replace("unlock_stage/", "")

                if (!(AStages.playerHasStage(stage, player))) {
                    // 将物品减1
                    event.item.shrink(1)

                    // 给予进度
                    server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/${stage}`)

                    // 生成粒子
                    server.runCommandSilent(`execute at ${playerName} run particle minecraft:totem_of_undying ~ ~ ~ 2 2 2 5 1000 force`)
                    console.log(`Give ${playerName} for greedycraft:stages/twilight_shield Advancement`)
                } else {
                    player.tell(Component.translatable("greedycraft.message.right_clicked.has_stage"))
                }
            }
        }
    })
})