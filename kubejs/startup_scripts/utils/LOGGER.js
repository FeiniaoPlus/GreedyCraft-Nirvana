// priority: 500

function LOGGER(level, message) {
    console.log("===== GCTN Log System =====")
    console.log(`Log Level: ${level}, message:`)
    console.log("\n")
    switch (level) {
        case "error":
            console.error(message)
            break
        case "warn":
            console.warn(message)
        default:
            console.info(message)
    }
    console.log("===========================")
}