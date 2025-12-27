// priority: 600

// 获取整合包基础配置
global.packLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.language")
global.aotoSetLanguage = KJSutils.Analysis("config/greedycraft/config.json", "$.aotoSetLanguage")
global.packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")
global.checkVersionUpdate = KJSutils.Analysis("config/greedycraft/config.json", "$.checkVersionUpdate")
global.antiCheat = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheat")
global.antiCheatMode = KJSutils.Analysis("config/greedycraft/config.json", "$.antiCheatMode")
global.localPackVersionCode = KJSutils.Analysis("config/greedycraft/config.json", "$.localPackVersionCode")
global.localPackVersionName = KJSutils.Analysis("config/greedycraft/config.json", "$.localPackVersionName")
