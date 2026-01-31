// priority: 900

// 添加自定义进度
ServerEvents.generateData("AFTER_MODS", event => {
    event.json("greedycraft:advancement/stages/init.json", {
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": false,
            "background": "greedycraft:textures/block/infinity_block_block_block.png",
            "description": {
                "translate": "greedycraft.advancement.description.init"
            },
            "icon": {
                "id": "greedycraft:logo"
            },
            "show_toast": false,
            "title": {
                "translate": "greedycraft.advancement.title.init"
            }
        },
        "requirements": [
            [
                "impossible"
            ]
        ],
        "sends_telemetry_event": false
    })
    event.json("greedycraft:advancement/stages/init_start.json", {
        "parent": "greedycraft:stages/init",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": false,
            "description": {
                "translate": "greedycraft.advancement.description.init_start"
            },
            "icon": {
                "id": "minecraft:grass_block"
            },
            "show_toast": false,
            "title": {
                "translate": "greedycraft.advancement.title.init_start"
            }
        },
        "requirements": [
            [
                "impossible"
            ]
        ],
        "sends_telemetry_event": false
    })
    event.json("greedycraft:advancement/stages/init_creative.json", {
        "parent": "greedycraft:stages/init",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": false,
            "description": {
                "translate": "greedycraft.advancement.description.init_creative"
            },
            "icon": {
                "id": "greedycraft:creative_soul"
            },
            "show_toast": false,
            "title": {
                "translate": "greedycraft.advancement.title.init_creative"
            }
        },
        "requirements": [
            [
                "impossible"
            ]
        ],
        "sends_telemetry_event": false
    })
    event.json("greedycraft:advancement/stages/getting_started", {
        "parent": "greedycraft:stages/init_start",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": true,
            "description": {
                "translate": "greedycraft.advancement.description.getting_started"
            },
            "icon": {
                "id": "minecraft:oak_log"
            },
            "show_toast": true,
            "title": {
                "translate": "greedycraft.advancement.title.getting_started"
            }
        },
    })
    event.json("greedycraft:advancement/stages/twilight_forest", {
        "parent": "greedycraft:stages/getting_started",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": true,
            "description": {
                "translate": "greedycraft.advancement.description.twilight_forest"
            },
            "icon": {
                "id": "greedycraft:twilight_gem"
            },
            "show_toast": true,
            "title": {
                "translate": "greedycraft.advancement.title.twilight_forest"
            }
        },
    })
    event.json("greedycraft:advancement/stages/twilight_shield", {
        "parent": "greedycraft:stages/twilight_forest",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": true,
            "description": {
                "translate": "greedycraft.advancement.description.twilight_shield"
            },
            "icon": {
                "id": "greedycraft:twilight_shield"
            },
            "show_toast": true,
            "title": {
                "translate": "greedycraft.advancement.title.twilight_shield"
            }
        },
    })
    event.json("greedycraft:advancement/stages/nether", {
        "parent": "greedycraft:stages/twilight_shield",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": true,
            "description": {
                "translate": "greedycraft.advancement.description.nether"
            },
            "icon": {
                "id": "minecraft:nether_bricks"
            },
            "show_toast": true,
            "title": {
                "translate": "greedycraft.advancement.title.nether"
            }
        },
    })
    event.json("greedycraft:advancement/stages/gaia_killer", {
        "parent": "greedycraft:stages/nether",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": true,
            "description": {
                "translate": "greedycraft.advancement.description.gaia_killer"
            },
            "icon": {
                "id": "botania:life_essence"
            },
            "show_toast": true,
            "title": {
                "translate": "greedycraft.advancement.title.gaia_killer"
            }
        },
    })
    event.json("greedycraft:advancement/stages/wither_killer", {
        "parent": "greedycraft:stages/gaia_killer",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": true,
            "description": {
                "translate": "greedycraft.advancement.description.wither_killer"
            },
            "icon": {
                "id": "minecraft:nether_star"
            },
            "show_toast": true,
            "title": {
                "translate": "greedycraft.advancement.title.wither_killer"
            }
        },
    })
    event.json("greedycraft:advancement/stages/fearless_man", {
        "parent": "greedycraft:stages/nether",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": true,
            "description": {
                "translate": "greedycraft.advancement.description.fearless_man"
            },
            "icon": {
                "id": "aether:silver_dungeon_key"
            },
            "show_toast": true,
            "title": {
                "translate": "greedycraft.advancement.title.fearless_man"
            }
        },
    })
    event.json("greedycraft:advancement/stages/ender_charm", {
        "parent": "greedycraft:stages/wither_killer",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": true,
            "description": {
                "translate": "greedycraft.advancement.description.ender_charm"
            },
            "icon": {
                "id": "greedycraft:ender_charm"
            },
            "show_toast": true,
            "title": {
                "translate": "greedycraft.advancement.title.ender_charm"
            }
        },
    })
    event.json("greedycraft:advancement/stages/hardmode", {
        "parent": "greedycraft:stages/ender_charm",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": true,
            "description": {
                "translate": "greedycraft.advancement.description.hardmode"
            },
            "icon": {
                "id": "minecraft:dragon_head"
            },
            "show_toast": true,
            "title": {
                "translate": "greedycraft.advancement.title.hardmode"
            }
        },
    })
    event.json("greedycraft:advancement/stages/fusion_matrix", {
        "parent": "greedycraft:stages/hardmode",
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": true,
            "description": {
                "translate": "greedycraft.advancement.description.fusion_matrix"
            },
            "icon": {
                "id": "greedycraft:fusion_matrix_ingot"
            },
            "show_toast": true,
            "title": {
                "translate": "greedycraft.advancement.title.fusion_matrix"
            }
        },
    })
})