// priority: 1000

// 获取整合包基础配置
global.packLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.language")
global.autoSetLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.autoSetLanguage")
global.packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")
global.checkVersionUpdate = KJSutils.Analysis("config/greedycraft/config.json", "$.checkVersionUpdate")
global.antiCheat = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheat")
global.antiCheatMode = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheatMode")
global.localPackVersionCode = KJSutils.Analysis("config/greedycraft/config.json", "$.localPackVersionCode")
global.localPackVersionName = KJSutils.Analysis("config/greedycraft/config.json", "$.localPackVersionName")
global.updateLink = KJSutils.AnalysisAll("config/greedycraft/config.json", "$.updateLink")

console.log(`Get GreedyCraft Config:
    packLanguage: ${global.packLanguage}
    autoSetLanguage: ${global.autoSetLanguage}
    packMode: ${global.packMode}
    checkVersionUpdate: ${global.checkVersionUpdate}
    antiCheat: ${global.antiCheat}
    antiCheatMode: ${global.antiCheatMode}
    localPackVersionCode: ${global.localPackVersionCode}
    localPackVersionName: ${global.localPackVersionName}
    updateLink: ${global.updateLink}`)