ClientEvents.lang("en_us", event => {
    KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "en_us");
    LOGGER("info", "Change greedycraft config language for en_us")
})

ClientEvents.lang("zh_cn", event => {
    KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "zh_cn");
    LOGGER("info", "Change greedycraft config language for zh_cn")
})