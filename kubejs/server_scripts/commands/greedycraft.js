// 注册切换整合包专属命令

let permission = 4

if (Platform.isClientEnvironment()) {
    permission = 2
} else {
    permission = 4
}


// 注册主命令
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(
        // 命令名称
        Commands.literal("greedycraft")
            // 子命令
            .then(
                // 创建名为 options 的 String 类型参数输入
                Commands.argument("options", Arguments.STRING.create(event))
                    // 补全提示
                    .suggests((ctx, builder) => {
                        return builder
                            .suggest("setmode")
                            .buildFuture()
                    })
                    // 子命令
                    .then(
                        // 创建名为 packmode 的 String 类型参数输入
                        Commands.argument("packmode", Arguments.STRING.create(event))
                            // 补全提示
                            .suggests((ctx, builder) => {
                                return builder
                                    .suggest("casual")
                                    .suggest("adventure")
                                    .suggest("expert")
                                    .buildFuture()
                            })
                            // 权限检查
                            .requires(source => source.hasPermission(permission))
                            // 执行操作
                            .executes(ctx => {
                                let options = Arguments.STRING.getResult(ctx, "packmode")
                                let server = ctx.source.server
                                let player = ctx.source.player

                                // 从配置文件获取 packMode 的值
                                let packMode = KJSutils.Analysis("config/greedycraft/config.json", "$.packMode")

                                // 对比配置文件中的值和此次要更改的值是否一致
                                if (packMode == options) {
                                    // 一致则直接 retrun
                                    player.tell(Component.translatable("greedycraft.commands.setpackmode.noupdate"))
                                    return 1
                                }

                                // 发送服务器消息
                                server.tell(Component.translatable(`greedycraft.commands.setpackmode`, player.username).append(Component.translatable(`greedycraft.packmode.${options}`)))

                                // 修改配置文件的值
                                KJSutils.ModifyJsonValue("config/greedycraft/config.json", "$.packMode", options)

                                // 热重载
                                server.runCommandSilent("reload")

                                // 更改计分板
                                let gameMode = getScoreBoardGameMode(options, player).getString()
                                server.runCommandSilent(`scoreboard players display name gamemode packinfo "${gameMode}"`)

                                server.tell(Component.translatable("greedycraft.commands.setpackmode.success").append(Component.translatable(`greedycraft.packmode.${options}`)))
                                return 1
                            })
                    )
            )
    )
})