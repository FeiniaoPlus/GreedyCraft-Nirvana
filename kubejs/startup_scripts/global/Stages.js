// priority: 3000

// 整合包阶段及限制
global.stages = {
    item: {
        getting_started: [
            "#c:player_workstations/crafting_tables",
            "#c:blocks/planks",
            "#c:chests",
            "#c:cobblestones",
            "#c:ingots/iron",
            "#c:ingots/gold",
            "#c:nuggets/iron",
            "#c:nuggets/gold",
            "#c:dusts/iron",
            "#c:dusts/gold",
            "#minecraft:planks",
            "minecraft:wooden_pickaxe",
            "minecraft:stone_pickaxe",
            "minecraft:diamond_pickaxe",
            "minecraft:golden_pickaxe",
            "minecraft:wooden_axe",
            "minecraft:stone_axe",
            "minecraft:diamond_axe",
            "minecraft:golden_axe",
            "minecraft:iron_axe",
            "minecraft:iron_block",
            "minecraft:gold_block",
            "greedycraft:twilight_gem"
        ],
        twilight_forest: [
            "greedycraft:twilight_shield"
        ],
        nether: [
            "#c:dusts/quartz",
            "#c:ores/quartz",
            "#c:blocks/quartz_block",
            "#minecraft:anvil",
            "#greedycraft:material/aeroite",
            "#greedycraft:material/asgardium",
            "#greedycraft:material/aqualite",
            "#greedycraft:material/durasteel",
            "#ae2:all_quartz",
            "ae2:certus_quartz_dust",
            "ae2:fluix_dust",
            "ae2:formation_core",
            "ae2:annihilation_core",
            "botania:life_essence",
            "botania:gaia_ingot",
            "botania:enchanter",
            "minecraft:netherite_ingot",
            "minecraft:netherite_block",
            "minecraft:ancient_debris",
            "minecraft:netherite_scrap",
            "minecraft:glowstone",
            "minecraft:glowstone_dust",
            "minecraft:beacon",
            "minecraft:blaze_rod",
            "minecraft:blaze_powder",
            "minecraft:ender_eye",
            "minecraft:enchanted_book",
            "minecraft:enchanting_table",
            "minecraft:brewing_stand",
            "minecraft:ghast_tear",
            "minecraft:magma_cream",
            "netherex:fiery_quartz_ore",
            "netherex:gloomy_quartz_ore",
            "netherex:lively_quartz_ore",
            // "greedycraft:sponsors_chest",
            // "greedycraft:shining_star",
            // "greedycraft:medkit_big",
            // "greedycraft:blood_sigil",
            // "greedycraft:bloody_sacrifice",
            // "greedycraft:awakened_eye",
            // "greedycraft:sponsor_chest_fragment",
            "greedycraft:aeroite_ore",
            "greedycraft:asgardium_ore",
            "defiled_lands_reborn:ravaging_essence",
            "defiled_lands_reborn:ravaging_ingot",
            "defiled_lands_reborn:remorseful_essence",
            "defiled_lands_reborn:remorseful_gem",
            "defiled_lands_reborn:idol_sorrow",
            "defiled_lands_reborn:calling_stone",
            "extendedae:entro_ingot",
            "extendedae:entro_dust",
            "extendedae:entro_block",
            "quark:blaze_lantern",
            "enderio:dark_steel_sword",
            "enderio:withering_powder",
            "hooked:redstone_hook"
        ],
        gaia_killer: [
            "minecraft:wither_skeleton_skull"
        ],
        wither_killer: [
            // "greedycraft:bravery_certificate",
            "greedycraft:ender_charm",
            "enderio:reinforced_obsidian_block",
            "enderio:redstone_alloy_ingot",
            "mysticalagriculture:witherproof_block",
            "mysticalagriculture:witherproof_glass",
            "minecraft:end_crystal",
            "minecraft:nether_star"
        ],
        fearless_man: [
            "deeperdarker:heart_of_the_deep"
        ],
        ender_charm: [
            "#c:blocks/end_stone",
            "minecraft:end_rod",
            "minecraft:end_stone_bricks",
            "minecraft:end_portal_frame",
            "minecraft:chorus_fruit",
            "prefab:item_ender_gateway",
            "hooked:ender_hook",
        ],
        hardmode: [
            "#greedycraft:material/fusion_matrix",
            "#greedycraft:material/cryonium",
            "#greedycraft:material/shadowium",
            "#greedycraft:material/aeonsteel",
            "#greedycraft:mysticalagriculture_level_6",
            "minecraft:popped_chorus_fruit",
            "minecraft:dragon_egg",
            "minecraft:elytra",
            "actuallyadditions:phantom_placer",
            "actuallyadditions:phantom_booster",
            "actuallyadditions:phantom_itemface",
            "actuallyadditions:phantom_energyface",
            "actuallyadditions:phantom_liquiface",
            "actuallyadditions:phantom_redstoneface",
            "actuallyadditions:lens_of_disenchanting",
            "actuallyadditions:teleport_staff",
            "actuallyadditions:ender_casing",
            // "greedycraft:forbidden_bible",
            // "greedycraft:true_blood_sigil",
            // "greedycraft:ordinary_medal",
            // "greedycraft:medkit_super",
            // "greedycraft:wither_soul",
            // "greedycraft:dragon_soul",
            // "greedycraft:creative_shard",
            "greedycraft:cytosinite_ore",
            "greedycraft:cryonium_ore",
            "greedycraft:deepslate_cryonium_ore",
            "greedycraft:titanium_ore",
            "twilightforest:shield_scepter",
            "bigreactors:cyanite_ingot",
            "mekanism:hdpe_elytra"
        ],
        fusion_matrix: [
            "#c:ores/draconium",
            // "greedycraft:beast_hand",
            "greedycraft:electronium_block",
            "greedycraft:electronium_ingot",
            "summoningrituals:altar",
            "draconicevolution:draconium_ingot",
            "draconicevolution:draconium_dust",
            "draconicevolution:draconium_block",
            "mysticalagriculture:fusio_matrix_essence"
        ],
        wyvern: [
            "#greedycraft:material/wyvern",
            // "greedycraft:solarium_star",
            // "greedycraft:sun_totem",
            // "greedycraft:solar_seed",
            // "greedycraft:broken_solarium_star"
            "avaritia:neutron_collector",
            "avaritia:neutron_pile",
            "avaritia:neutron_ingot",
            "avaritia:neutron_nugget"
        ]
    },
    ore: {
        getting_started: {
            "#c:player_workstations/crafting_tables": "greedycraft:unknown_block",
            "#c:chests": "greedycraft:unknown_block"
        },
        nether: {
            "#minecraft:anvil": "greedycraft:unknown_block",
            "minecraft:beacon": "greedycraft:unknown_block",
            "minecraft:enchanting_table": "greedycraft:unknown_block",
            "minecraft:nether_quartz_ore": "minecraft:netherrack",
            "netherex:fiery_quartz_ore": "netherex:fiery_netherrack",
            "netherex:gloomy_quartz_ore": "netherex:gloomy_netherrack",
            "netherex:lively_quartz_ore": "netherex:lively_netherrack",
            "greedycraft:aeroite_ore": "aether:cold_aercloud",
            "greedycraft:asgardium_ore": "aether:holystone"
        },
        ender_charm: {
            "minecraft:end_portal_frame": "greedycraft:unknown_block"
        },
        hardmode: {
            "greedycraft:cytosinite_ore": "minecraft:mud",
            "greedycraft:cryonium_ore": "minecraft:stone",
            "greedycraft:deepslate_cryonium_ore": "minecraft:deepslate",
            "greedycraft:titanium_ore": "minecraft:end_stone"
        },
        fusion_matrix: {
            "draconicevolution:overworld_draconium_ore": "minecraft:stone",
            "draconicevolution:deepslate_draconium_ore": "minecraft:deepslate",
            "draconicevolution:nether_draconium_ore": "minecraft:netherrack",
            "draconicevolution:end_draconium_ore": "minecraft:end_stone"
        }
    },
    dimension: {
        twilight_shield: [
            "minecraft:the_nether"
        ],
        nether: [
            "aether:the_aether"
        ],
        fearless_man: [
            "deeperdarker:otherside"
        ],
        ender_charm: [
            "minecraft:the_end"
        ],
        hardmode: [
            "greedycraft:mining"
        ]
    },
    mod: {
        nether: [
            "aether"
        ],
        hardmode: [
            "avaritia",
            "draconicevolution",
            "projecte",
            "projectexpansion"
        ]
    },
    mob: {
        twilight_shield: [
            "minecraft:blaze",
            "minecraft:wither_skeleton"
        ],
        gaia_killer: [
            "minecraft:wither"
        ],
        hardmode: [
            "enderzoology:concussion_creeper",
            "enderzoology:dire_wolf",
            "enderzoology:enderminy",
            "enderzoology:fallen_knight",
            "enderzoology:fallen_mount",
            "enderzoology:wither_cat",
            "enderzoology:wither_witch",
            "mowziesmobs:frostmaw"
        ],
        wyvern: [
            "mowziesmobs:umvuthi"
        ]
    }
}
