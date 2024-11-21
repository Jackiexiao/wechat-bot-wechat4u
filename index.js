/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: xiaoxin
 * @Date: 2024-02-21 16:23:39
 * @LastEditors: xiaoxin
 * @LastEditTime: 2024-02-27 18:56:09
 */
// 导包
import { WechatyBuilder, ScanStatus, log } from "wechaty"
import qrcodeTerminal from "qrcode-terminal"
import { sendMessage } from './src/core/sendMessage.js'
import { robotName } from "./config/config.js"
import './src/server.js'
import logger from './src/utils/logger.js'

// 全局错误处理
process.on('uncaughtException', (error) => {
    logger.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// 优雅退出
process.on('SIGTERM', async () => {
    logger.info('Received SIGTERM signal. Starting graceful shutdown...');
    await bot.stop();
    process.exit(0);
});

// 扫描二维码
function onScan(qrCode,status){
    if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
        qrcodeTerminal.generate(qrCode, { small: true })
        const qrcodeImageUrl = ['https://api.qrserver.com/v1/create-qr-code/?data=', encodeURIComponent(qrCode)].join('')
        logger.info(`二维码地址: ${qrcodeImageUrl}`)
    } else {
        logger.info(`二维码扫描结果: ${ScanStatus[status]} ${status}`)
    }
}

//登录
function onLogin(user){
    logger.info(`当前时间: ${new Date()} --- 机器人:${user} --- 登录成功`)
}

//注销
function onLogout(user){
    logger.warn(`当前时间: ${new Date()} --- 机器人:${user} --- 登出`)
}

//接收消息
async function onMessage(message){
    try {
        await sendMessage(message)
    } catch (error) {
        logger.error('消息处理错误:', error);
    }
}

//初始化机器人
const bot = WechatyBuilder.build({
    name: robotName,
    puppet: 'wechaty-puppet-wechat4u'
})

//机器人监听事件
bot
    .on('scan', onScan)
    .on('login', onLogin)
    .on('logout', onLogout)
    .on('message', onMessage)
    .on('error', (error) => {
        logger.error('Bot error:', error);
    })

// 启动机器人
bot.start()
    .then(() => logger.info('Bot started successfully'))
    .catch(error => {
        logger.error('Bot failed to start:', error);
        process.exit(1);
    });