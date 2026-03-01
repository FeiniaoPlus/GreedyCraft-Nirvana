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
                    level.spawnParticles("minecraft:totem_of_undying", true, player.x, player.y, player.z, 2.0, 2.0, 2.0, 1000, 5)

                    // 将物品减 1
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
    // 将物品减 1
    event.item.shrink(1)
})

// 极寒圣物
ItemEvents.rightClicked("greedycraft:cryonic_artifact", event => {
    let player = event.player
    let level = event.level

    let trigger = false

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
            level.spawnParticles("minecraft:snowflake", true, player.x, player.y, player.z, 2.0, 2.0, 2.0, 200, 0.1)

            // 将物品减 1
            event.item.shrink(1)

            trigger = true
        }
    })

    if (!(trigger)) {
        // 发送消息
        server.tell(Component.translatable("greedycraft.message.right_clicked.cryonic_artifact"))
    }
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
        entity.mergeNbt({ LootTable: "minecraft:chests/simple_dungeon" })
    })
    // 将物品减 1
    event.item.shrink(1)
})

// 应急按钮
ItemEvents.rightClicked("greedycraft:emergency_button", event => {
    let player = event.player
    let server = event.server
    let level = event.level

    // 获取当前世界所有实体
    level.entities.forEach(entity => {
        // 排除玩家
        if (!(entity.isPlayer())) {
            // 删除（非 Kill）
            entity.discard()
        }
    })

    // 发送消息
    server.tell(Component.translatable("greedycraft.message.right_clicked.emergency_button", `§e§l${player.username}`, `§d§l${level.displayName}`))

    // 将物品减 1
    event.item.shrink(1)
})

// 贤者之石 [赝品]
ItemEvents.rightClicked("greedycraft:fake_philosopher_stone", event => {
    let block = event.target.block
    let level = event.level

    // 判断右键的方块是否是沙子
    if (block.getId() == "minecraft:sand") {
        // 重新设置为玻璃
        level.setBlock(block.getPos(), "minecraft:glass", 3)
    }
})

// 无限宝石
ItemEvents.rightClicked("greedycraft:infinity_stone", event => {
    let player = event.player
    let server = event.server

    // 判断是否是开发者或者是以创造模式创建的存档
    if (global.creatorList.includes(player.uuid.toString()) || AStages.serverHasStage("init_creative", server)) {
        // 抗性效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_RESISTANCE, 50, 5))
        // 力量效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_BOOST, 50, 10))
        // 否侧判断是否拥有 truehero 阶段并且没有作弊
    } else if (!(checkCheat(player, server)) && AStages.playerHasStage("truehero", player)) {
        // 抗性效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_RESISTANCE, 50, 4))
        // 力量效果
        player.addEffect(new MobEffectInstance(MobEffects.DAMAGE_BOOST, 50, 8))
        // 生命恢复效果
        player.addEffect(new MobEffectInstance(MobEffects.REGENERATION, 50, 5))
        // 以上条件都不满足则发送文本消息并kill
    } else {
        player.tell(Component.translatable("greedycraft.message.right_clicked.infinity_stone"))
        player.kill()
    }
})

// 超时空扫帚
ItemEvents.rightClicked("greedycraft:item_purger", event => {
    let player = event.player
    let server = event.server

    // 判断权限
    if (player.hasPermissions(4)) {
        // 发送消息
        server.tell(Component.translatable("greedycraft.message.right_clicked.item_purger", `§6§l${player.username}`))
        // 清理掉落物
        cleanServerDroppedItem(server)
    } else {
        // 发送消息
        player.tell(Component.translatable("greedycraft.commands.error.permissions"))
    }
})

// 通行令牌
ItemEvents.rightClicked("greedycraft:passport", event => {
    let player = event.player
    let server = event.server

    // 给予全部阶段与进度
    givePlayerAllStage(server, player)
})

// 知识宝珠
ItemEvents.rightClicked("greedycraft:pearl_of_knowledge", event => {
    let player = event.player
    let level = event.level

    // 给予经验
    player.giveExperiencePoints(60000)

    // 生成粒子
    level.spawnParticles("minecraft:happy_villager", true, player.x, player.y, player.z, 2.0, 2.0, 2.0, 300, 0.1)

    // 将物品减 1
    event.item.shrink(1)
})

ItemEvents.rightClicked("greedycraft:purifying_dust", event => {
    let level = event.level
    let player = event.player
    let blockTarget = event.target.block
    let startTime = Date.now()

    // 开始计时器
    let setBlockNumber = 0

    if (blockTarget != null) {
        // 展开 tag
        let Recipes = {}
        Object.entries(global.purifyingDustRecipes).forEach(([product, sources]) => {
            Recipes[product] = []
            sources.forEach(source => {
                if (source.startsWith("#")) {
                    let tag = source.substring(1)
                    Block.getTaggedIds(tag).forEach(blockID => {
                        Recipes[product].push(blockID.toString())
                    })
                } else {
                    Recipes[product].push(source)
                }
            })
        })

        // 遍历半径 15 格范围内的所有方块 ID 和坐标
        let blocksTarget = {}
        let baseX = blockTarget.getX()
        let baseY = blockTarget.getY()
        let baseZ = blockTarget.getZ()

        for (let dx = -15; dx <= 15; dx++) {
            for (let dy = -15; dy <= 15; dy++) {
                for (let dz = -15; dz <= 15; dz++) {

                    let x = baseX + dx
                    let y = baseY + dy
                    let z = baseZ + dz

                    let blockID = level.getBlock(x, y, z).getId()

                    // 如果不存在，先初始化
                    if (!blocksTarget[blockID]) {
                        blocksTarget[blockID] = []
                    }

                    // 添加坐标
                    blocksTarget[blockID].push({
                        x: x,
                        y: y,
                        z: z
                    })
                }
            }
        }

        // 根据以上信息按照合成表替换方块
        Object.entries(blocksTarget).forEach(([blockID, posMap]) => {
            Object.entries(Recipes).forEach(([product, sources]) => {
                if (sources.includes(blockID)) {
                    posMap.forEach(pos => {
                        // 设置方块
                        level.setBlock([pos.x, pos.y, pos.z], product, 3)
                        setBlockNumber += 1
                    })
                }
            })
        })

        if (setBlockNumber > 0) {
            // 生成粒子
            level.spawnParticles("minecraft:poof", true, player.x, player.y, player.z, 8.0, 8.0, 8.0, 1500, 0.2)

            // 停止计时器
            let endTime = Date.now()

            // 发送消息
            player.tell(Component.translatable("greedycraft.message.right_clicked.purifying_dust", `§6${setBlockNumber}`, endTime - startTime))

            // 将物品减 1
            event.item.shrink(1)
        } else {
            player.tell(Component.translatable("greedycraft.message.right_clicked.purifying_dust.1"))
        }
    } else {
        player.tell(Component.translatable("greedycraft.message.right_clicked.purifying_dust.2"))
    }
})