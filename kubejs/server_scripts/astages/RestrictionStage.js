// priority: 900

// 注册astages阶段
AStages.addRestrictionForItem("greedycraft_stage/item/init", "init", ['greedycraft:placeholder'])
AStages.addRestrictionForItem("greedycraft_stage/item/init", "init_start", ['greedycraft:placeholder'])
AStages.addRestrictionForItem("greedycraft_stage/item/init", "init_creative", ['greedycraft:placeholder'])

Object.entries(global.stages).forEach(([stageType, stageMap]) => {
    Object.entries(stageMap).forEach(([stageName, stageData]) => {
        switch (stageType) {
            case "item":
                let itemList = []
                stageData.forEach(data => {
                    if (data.startsWith("#")) {
                        Ingredient.of(data).itemIds.forEach(item => {
                            AStages.addRestrictionForItem(`greedycraft_stage/item/tag/${stageName}/id/${item}`, stageName, item)
                                .setHideInJEI(false)
                                .setHideTooltip(true)
                            console.log(`reg item stage: ${item}`)
                        })
                    } else {
                        AStages.addRestrictionForItem(`greedycraft_stage/item/${stageName}/id/${data}`, stageName, data)
                            .setHideInJEI(false)
                            .setHideTooltip(true)
                        console.log(`reg item stage: ${data}`)
                    }
                })
                break;
            case "ore":
                Object.entries(stageData).forEach(([ore, block]) => {
                    if (ore.startsWith("#")) {
                        let tag = ore.substring(1)
                        Block.getTaggedIds(tag).forEach(blockID => {
                            AStages.addRestrictionForOre(`greedycraft_stage/ore/tag/${stageName}/id/${blockID}`, stageName, Block.getBlock(blockID).defaultBlockState(), Block.getBlock(block).defaultBlockState())
                            console.log(`reg ore stage: ${blockID} remodel block: ${block}`)
                        })
                    } else {
                        AStages.addRestrictionForOre(`greedycraft_stage/ore/${stageName}/id/${ore}`, stageName, Block.getBlock(ore).defaultBlockState(), Block.getBlock(block).defaultBlockState())
                        console.log(`reg ore stage: ${ore} remodel block: ${block}`)
                    }
                })
                break;
            case "dimension":
                stageData.forEach(data => {
                    AStages.addRestrictionForDimension(`greedycraft_stage/dimension/${stageName}/id/${data}`, stageName, data)
                    console.log(`reg dimension stage: ${data}`)
                })
                break;
            case "mod":
                stageData.forEach(data => {
                    Item.getList().forEach(item => {
                        if (item.id.startsWith(`${data}:`)) {
                            let itemID = item.id.toString()
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
                    AStages.addRestrictionForMob(`greedycraft_stage/mob/${stageName}/id/${data}`, stageName, data)
                    console.log(`reg mob stage: ${data}`)
                })
                break;
            default:
                console.error(`Reg Stage ${stageName}: Does not exist Type ${stageType}`)
        }
    })
})