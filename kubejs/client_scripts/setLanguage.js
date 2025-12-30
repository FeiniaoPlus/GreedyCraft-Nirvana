// 根据系统语言设置整合包语言

let autoSetLanguage = global.autoSetLanguage

if (autoSetLanguage == "true") {
    let language = KJSutils.GetSystemLanguage()
    LOGGER("info", `System Language: ${language}`)
    switch (language) {
        case "en-US":
            KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "en_us")
            LOGGER("info", `Change Language to en_us`)
            break
        case "zh-CN":
            KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "zh_cn")
            LOGGER("info", `Change Language to zh_cn`)
            break
        default:
            KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "en_us")
            LOGGER("info", `Change Language to en_us`)
    }
}