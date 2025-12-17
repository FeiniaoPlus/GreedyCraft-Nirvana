// priority: 500

function LOGGER(level, message) {
    console.log("===== GCTN Log System =====")
    console.log(`Log Level: ${level}, message:`)
    switch (level) {
        case "error":
            console.error(`\n${message}`)
            break
        case "warn":
            console.warn(`\n${message}`)
        default:
            console.info(`\n${message}`)
    }
    console.log("===========================")
}