EntityEvents.beforeHurt(event => {
    let entity = event.getEntity()
    let source = event.getSource()

    if (source.player && source.direct && source.player.mainHandItem.id.toString() == "greedycraft:one_punch") {
        entity.kill()
    }
})