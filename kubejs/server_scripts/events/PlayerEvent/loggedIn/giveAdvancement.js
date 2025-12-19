// priority: 50

PlayerEvents.loggedIn(event => {
    let player = event.player
    let playerName = player.getName().getString()
    if (!(AStages.playerHasStage("init", player))) {
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:init`)
        LOGGER("info", `New Player ${playerName} Join the Game`)
    }
})

PlayerEvents.advancement("greedycraft:init", event => {
    let player = event.player
    let playerName = player.getName().getString()
    if (!(AStages.playerHasStage("init_creative", player)) && !(AStages.playerHasStage("init_start", player)) && player.isCreative()) {
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_creative`)
        LOGGER("info", `Give ${playerName} for greedycraft:stages/init_creative Advancement`)
    } else {
        event.server.runCommandSilent(`advancement grant ${playerName} only greedycraft:stages/init_start`)
        LOGGER("info", `Give ${playerName} for greedycraft:stages/init_start Advancement`)
    }
})