let languageLines = FilesJS.searchInFile("options.txt", "lang:")

if (languageLines.length > 0) {
    let language = languageLines[0]

    if (language == "lang:en_us") {
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "en_us")
    } else if (language == "lang:zh_cn") {
        KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.language", "zh_cn")
    }
}
