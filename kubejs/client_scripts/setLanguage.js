let aotoSetLanguage = global.aotoSetLanguage

if (aotoSetLanguage == "true") {
    let language = KJSutils.GetSystemLanguage()
    if (language == "en-us") {
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "en_us")
    } else if (language == "zh-cn") {
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "zh_cn")
    }
}