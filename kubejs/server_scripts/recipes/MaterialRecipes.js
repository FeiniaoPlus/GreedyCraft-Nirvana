ServerEvents.recipes(event => {
    global.materialList.forEach(material => {
        material.types.forEach(type => {
            switch (type) {
                case "ingot": {
                    // 9个粒合成1个锭
                    event.shaped(Item.of(`greedycraft:${material.name}_ingot`), [
                        "AAA",
                        "AAA",
                        "AAA"
                    ],
                        {
                            A: `greedycraft:${material.name}_nugget`
                        }
                    )
                    // 9个锭合成1个块
                    event.shaped(Item.of(`greedycraft:${material.name}_block`), [
                        "AAA",
                        "AAA",
                        "AAA"
                    ],
                        {
                            A: `greedycraft:${material.name}_ingot`
                        }
                    )
                    break;
                }
                case "nugget": {
                    // 1个锭获得9个粒
                    event.shapeless(Item.of(`greedycraft:${material.name}_nugget`, 9), [
                        `greedycraft:${material.name}_ingot`
                    ])
                    break;
                }
                case "rod": {
                    event.shaped(Item.of(`greedycraft:${material.name}_rod`), [
                        "   ",
                        " A ",
                        " A "
                    ], {
                        A: `greedycraft:${material.name}_ingot`
                    }
                    )
                    break;
                }
                case "gear": {
                    event.shaped(Item.of(`greedycraft:${material.name}_gear`), [
                        " A ",
                        "A A",
                        " A "
                    ], {
                        A: `greedycraft:${material.name}_ingot`
                    }
                    )
                    break;
                }
                default:
                    console.log("unknown recipe type")
            }
        })
    })
})