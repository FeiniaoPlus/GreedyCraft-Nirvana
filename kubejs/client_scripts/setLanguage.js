let aotoSetLanguage = global.aotoSetLanguage

if (aotoSetLanguage == "true") {
    let language = KJSutils.GetSystemLanguage()
    LOGGER("info", `System Language: ${language}`)
    if (language == "en-us") {
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "en_us")
        LOGGER("info", `Change Language to en_us`)
    } else if (language == "zh-cn") {
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "zh_cn")
        LOGGER("info", `Change Language to zh_cn`)
    }
}