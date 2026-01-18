// priority: 900

// 下载版本文件
if (global.checkVersionUpdate) {
    for (let link of global.updateLink) {
        let download = KJSutils.Download( link, "config/greedycraft", "version.json")
        if (download) {
            break
        } else {
            console.log(`Download version.json Error, link: ${link}`)
        }
    }
}