BlockEvents.rightClicked(event => {
    if (event.block.id == ("minecraft:short_grass" || "minecraft:fern")) {
        if (event.player.mainHandItem.id == "minecraft:air") {
            event.block.set("minecraft:air");
            if (Math.random() < 0.15) {
                event.player.give('greedycraft:plant_fibre');
            }
        }
    }
});
BlockEvents.rightClicked(event => {
    if (event.block.id == 'projectvibrantjourneys:rocks') {
        if (event.player.mainHandItem.id == "minecraft:air") {
            event.player.give('greedycraft:pebble');
        } else {
            const currentTime = Date.now();
            const lastMessageTime = event.player.persistentData.getLong('lastPebbleMessageTime') || 0;
            const cooldownTime = 5000;
            if (currentTime - lastMessageTime >= cooldownTime) {
                event.player.tell("§3你必须空手才能捡起它");
            }
        }
    }
});
BlockEvents.rightClicked(event => {
    if (event.block.id == 'projectvibrantjourneys:twigs') {
        if (event.player.mainHandItem.id == "minecraft:air") {
            event.player.give('minecraft:stick');
        } else {
            const currentTime = Date.now();
            const lastMessageTime = event.player.persistentData.getLong('lastPebbleMessageTime') || 0;
            const cooldownTime = 5000;
            if (currentTime - lastMessageTime >= cooldownTime) {
                event.player.tell("§3你必须空手才能捡起它");
            }
        }
    }
});