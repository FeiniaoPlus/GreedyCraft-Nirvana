// 根据系统语言设置整合包语言

let autoSetLanguage = global.autoSetLanguage

if (autoSetLanguage) {
    let language = KJSutils.GetSystemLanguage()
    console.log(`System Language: ${language}`)
    switch (language) {
        case "en-US":
            KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "en_us")
            console.log("Change Language to en_us")
            break;
        case "zh-CN":
            KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "zh_cn")
            console.log("Change Language to zh_cn")
            break;
        default:
            KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "en_us")
            console.log("Change Language to en_us")
    }
}