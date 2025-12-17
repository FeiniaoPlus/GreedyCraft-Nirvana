function checkModList() {
    let unofficialModList = []

    Platform.getMods().forEach((MOD_ID) => {
        if (!global.modList.has(MOD_ID)) {
            unofficialModList.push(MOD_ID)
        }
    })

    return unofficialModList
}