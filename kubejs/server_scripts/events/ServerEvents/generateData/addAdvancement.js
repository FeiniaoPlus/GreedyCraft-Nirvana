// priority: 100

ServerEvents.generateData("advancement", event => {
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
                "translate": "greedycraft.advancement.description.init"
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
                "translate": "greedycraft.advancement.description.init"
            },
            "icon": {
                "id": "minecraft:grass_block"
            },
            "show_toast": false,
            "title": {
                "translate": "greedycraft.advancement.description.init"
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
                "translate": "greedycraft.advancement.description.init"
            },
            "icon": {
                "id": "minecraft:nether_star"
            },
            "show_toast": false,
            "title": {
                "translate": "greedycraft.advancement.description.init"
            }
        },
        "requirements": [
            [
                "impossible"
            ]
        ],
        "sends_telemetry_event": false
    })
})