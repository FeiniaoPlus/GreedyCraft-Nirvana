// priority: 900

// 添加自定义进度
ServerEvents.generateData("AFTER_MODS", event => {
    event.json("greedycraft:advancement/init.json", {
        "criteria": {
            "impossible": {
                "trigger": "minecraft:impossible"
            }
        },
        "display": {
            "announce_to_chat": false,
            "background": "greedycraft:textures/gui/advancements/backgrounds/background.png",
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
        "parent": "greedycraft:init",
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
        "parent": "greedycraft:init",
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
                "id": "minecraft:nether_star"
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
        "parent": "greedycraft:stages/init_start",
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
        "parent": "greedycraft:stages/init_start",
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
})