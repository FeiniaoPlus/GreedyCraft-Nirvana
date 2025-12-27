// priority: 700

// 下载版本文件
if (global.checkVersionUpdate == "true") {
    KJSutils.Download("http://v4.shenhua2233.cn:20002/Update/GreedyCraft-Nirvana/version.json", "config/greedycraft", "version.json")
    LOGGER("info", "Download File: http://v4.shenhua2233.cn:20002/Update/GreedyCraft-Nirvana/version.json")
}