// priority: 500

function checkModList() {
    let unofficialModList = []

    Platform.getMods().forEach((MOD_ID) => {
        if (!global.modList.has(MOD_ID)) {
            unofficialModList.push(MOD_ID)
        }
    })

    return unofficialModList
}

function checkCheat(player) {
    let cheat = false
    let unofficialModList = checkModList()
    if (unofficialModList.length >= 0) {
        cheat = true
    }
    if (player.isCreative()) {
        if (!AStages.playerHasStage("init_creative", player)) {
            cheat = true
        }
    }
    return cheat
}