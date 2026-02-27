// 物品右键事件

// 为拥有 unlock_stage tag的物品右键解锁对应进度
let MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
let MobEffects = Java.loadClass("net.minecraft.world.effect.MobEffects")

ItemEvents.rightClicked(event => {
    let player = event.player
    let playerName = player.username
    let server = event.server
    let item = event.item
    let tags = item.tags

    // 从物品 tag 列表提取单个 tag
    tags.forEach(tag => {
        // 判断命名空间是否等于 greedycraft
        if (tag.namespace == "greedycraft") {
            // 判断 tag 路径是否是 unlock_stage/ 开头
            if (tag.path.toString().startsWith("unlock_stage/")) {
                // 截断字符串，留下截断名称
                let stage = tag.path.toString().replace("unlock_stage/", "")

                // 判断该阶段是否已解锁
                if (!(AStages.playerHasStage(stage, player))) {
                    // 给予进度
                    server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/${stage}`)

                    // 生成粒子
                    server.runCommandSilent(`execute at ${playerName} run particle minecraft:totem_of_undying ~ ~ ~ 2 2 2 5 1000 force`)

                    // 将物品减1
                    event.item.shrink(1)
                } else {
                    // 已解锁发送提示
                    player.tell(Component.translatable("greedycraft.message.right_clicked.has_stage"))
                }
            }
        }
    })
})

// 难度调节器
ItemEvents.rightClicked("greedycraft:difficulty_changer", event => {
    let server = event.server
    let playerName = event.player.username

    // 增加10难度
    server.runCommandSilent(`ps_difficulty add ${playerName} 10`)
})

// 创造模式控制器
ItemEvents.rightClicked("greedycraft:creative_controller", event => {
    let server = event.server
    let playerName = event.player.username

    // 切换为创造模式
    server.runCommandSilent(`gamemode creative ${playerName}`)
})

// 肾上腺素
ItemEvents.rightClicked("greedycraft:adrenaline", event => {
    // 速度效果
    event.player.addEffect(new MobEffectInstance(MobEffects.MOVEMENT_SPEED, 200, 4))
    // 力量效果
    event.player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_BOOST, 200, 3))

    event.item.shrink(1)
})

// 极寒圣物
ItemEvents.rightClicked("greedycraft:cryonic_artifact", event => {
    let player = event.player
    let level = event.level

    // 将范围设置为以玩家为中心周围 20 格
    let box = player.boundingBox.inflate(20.0)

    // 获取该 20 格内的所有实体列表
    let entitys = level.getEntitiesWithin(box)

    // 从列表提取单个实体
    entitys.forEach(entity => {
        // 判断实体 id 是否等于 aether:sun_spirit 并且处于活动状态
        if (entity.type == "aether:sun_spirit" && entity.isLiving()) {
            // 设置血量为 1
            entity.setHealth(1.0)
            // 生成粒子
            player.runCommandSilent("particle minecraft:snowflake ~ ~ ~ 2 2 2 0.1 200 force")
        }
    })
    event.item.shrink(1)
})

// 死亡计数器
ItemEvents.rightClicked("greedycraft:death_counter", event => {
    let player = event.player

    // 显示死亡计分板
    player.runCommandSilent("deathcounter broadcast")
})

// 超时空快递
ItemEvents.rightClicked("greedycraft:delivery_order", event => {
    let player = event.player
    let server = event.server
    let level = event.level

    // 生成运输矿车实体
    level.spawnEntity("minecraft:chest_minecart", entity => {
        // 设置位置为玩家 y 轴 + 1
        entity.setPos(player.x, player.y + 1.0, player.z)
        // 设置 nbt 战利品列表为 minecraft:chests/simple_dungeon
        entity.mergeNbt({LootTable: "minecraft:chests/simple_dungeon"})
    })

    event.item.shrink(1)
})

// 应急按钮
ItemEvents.rightClicked("greedycraft:emergency_button", event => {
    let player = event.player
    let server = event.server
    let level = event.level

    level.entities.forEach(entity => {
        if (!(entity.isPlayer())) {
            entity.discard()
        }
    })

    server.tell(Component.translatable("greedycraft.message.right_clicked.emergency_button", `§e§l${player.username}`, `§d§l${level.displayName}`))

    event.item.shrink(1)
})