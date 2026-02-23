// priority: 950

ServerEvents.tags("item", event => {
    event.removeAll("twilightforest:portal/activator").add("greedycraft:twilight_gem")
    event.remove("c:dusts/iron", "enderio:powdered_iron")
    event.remove("c:dusts/gold", "enderio:powdered_gold")
    event.remove("c:dusts/quartz", "enderio:powdered_quartz")
})