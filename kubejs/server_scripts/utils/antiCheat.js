// priority: 500

// 函数：检查是否有非官方模组，返回非官方模组列表
function checkModList() {
    let unofficialModList = []

    Platform.mods.forEach((MOD_ID) => {
        if (!global.modList.has(MOD_ID)) {
            unofficialModList.push(MOD_ID)
        }
    })

    return unofficialModList
}

// 函数：检查是否作弊，返回布尔值。要求提供 event.player 对象
function checkCheat(player) {
    let cheat = false
    let unofficialModList = checkModList()
    if (unofficialModList.length > 0) {
        cheat = true
    }
    if (player.isCreative()) {
        // 判断玩家在创造模式下有没有 init_creative 阶段
        if (!AStages.playerHasStage("init_creative", player)) {
            cheat = true
        }
    }
    return cheat
}