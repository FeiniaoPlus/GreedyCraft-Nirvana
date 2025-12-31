// priority: 1000

function LOGGER(level, message) {
    console.log("===== GCTN Log System =====")
    console.log(`Log Level: ${level}, Message:`)
    switch (level) {
        case "error":
            console.error(`\n${message}`)
            break
        case "warn":
            console.warn(`\n${message}`)
            break
        default:
            console.info(`\n${message}`)
    }
    console.log("===========================")
}