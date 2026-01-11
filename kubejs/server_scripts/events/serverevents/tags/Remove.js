// 删除Tag
ServerEvents.tags("item", event => {
    event.removeAll("twilightforest:portal/activator").add("greedycraft:twilight_gem")
})