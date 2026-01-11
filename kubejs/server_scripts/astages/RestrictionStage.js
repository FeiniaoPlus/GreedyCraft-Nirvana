// priority: 900

// 注册基础 Astages 阶段
AStages.addRestrictionForItem("greedycraft_stage/item/init", "init", ["greedycraft:placeholder"])
AStages.addRestrictionForItem("greedycraft_stage/item/init", "init_start", ["greedycraft:placeholder"])
AStages.addRestrictionForItem("greedycraft_stage/item/init", "init_creative", ["greedycraft:placeholder"])

// 从全局变量 stages 中提取阶段类型与阶段对象
Object.entries(global.stages).forEach(([stageType, stageMap]) => {
    // 从阶段数据中提取阶段名称与数据
    Object.entries(stageMap).forEach(([stageName, stageData]) => {
        // 按类型分别注册
        switch (stageType) {
            case "item":
                let itemList = []
                stageData.forEach(data => {
                    // 判断是否有 # 开头的数据，是则为Tag
                    if (data.startsWith("#")) {
                        // 从Tag中获取物品ID
                        Ingredient.of(data).itemIds.forEach(item => {
                            // 注册阶段
                            AStages.addRestrictionForItem(`greedycraft_stage/item/tag/${stageName}/id/${item}`, stageName, item)
                                .setHideInJEI(false)
                                .setHideTooltip(true)
                            console.log(`reg item stage: ${item}`)
                        })
                    } else {
                        // 否则直接注册
                        AStages.addRestrictionForItem(`greedycraft_stage/item/${stageName}/id/${data}`, stageName, data)
                            .setHideInJEI(false)
                            .setHideTooltip(true)
                        console.log(`reg item stage: ${data}`)
                    }
                })
                break;
            case "ore":
                // 从阶段数据里提取对应关系
                Object.entries(stageData).forEach(([ore, block]) => {
                    // 判断是不是Tag，与 item 类型同理
                    if (ore.startsWith("#")) {
                        let tag = ore.substring(1)
                        Block.getTaggedIds(tag).forEach(blockID => {
                            // 根据对应关系注册阶段
                            AStages.addRestrictionForOre(`greedycraft_stage/ore/tag/${stageName}/id/${blockID}`, stageName, Block.getBlock(blockID).defaultBlockState(), Block.getBlock(block).defaultBlockState())
                            console.log(`reg ore stage: ${blockID} remodel block: ${block}`)
                        })
                    } else {
                        // 根据对应关系注册阶段
                        AStages.addRestrictionForOre(`greedycraft_stage/ore/${stageName}/id/${ore}`, stageName, Block.getBlock(ore).defaultBlockState(), Block.getBlock(block).defaultBlockState())
                        console.log(`reg ore stage: ${ore} remodel block: ${block}`)
                    }
                })
                break;
            case "dimension":
                stageData.forEach(data => {
                    // 直接注册阶段
                    AStages.addRestrictionForDimension(`greedycraft_stage/dimension/${stageName}/id/${data}`, stageName, data)
                    console.log(`reg dimension stage: ${data}`)
                })
                break;
            case "mod":
                stageData.forEach(data => {
                    Item.getList().forEach(item => {
                        // 获取该模组的所有物品
                        if (item.id.startsWith(`${data}:`)) {
                            let itemID = item.id.toString()
                            // 注册阶段
                            AStages.addRestrictionForItem(`greedycraft_stage/mod/${stageName}/item/${itemID}`, stageName, itemID)
                                .setHideInJEI(false)
                                .setHideTooltip(true)
                            console.log(`reg mod stage: ${itemID}`)
                        }
                    })
                })
                break;
            case "mob":
                stageData.forEach(data => {
                    // 直接注册阶段
                    AStages.addRestrictionForMob(`greedycraft_stage/mob/${stageName}/id/${data}`, stageName, data)
                    console.log(`reg mob stage: ${data}`)
                })
                break;
            default:
                console.error(`Reg Stage ${stageName}: Does not exist Type ${stageType}`)
        }
    })
})