<p align="center">
	<strong>欢迎使用👏🏻wechat-bot-wechat4u</strong>
</p>
<a href="#" target="_blank">
    <img alt="License: Apache-2.0" src="https://img.shields.io/badge/License-Apache2.0-red.svg" />
</a>

----------

## 🌆 简介

一个情绪价值拉满的微信夸夸机器人 + 打卡机器人 + 和事佬机器人

1. @ 它， 可以跟它聊天
2. @ 它 然后说 “统计”，会有打卡统计
3.  关键词 `#打卡` 会触发“夸夸”，同时会后台记录你的打卡，方便统计
4. @ 它，它会识别群聊中的吵架，及时充当和事佬

wechat-bot-wechat4u，基于`wechat4u`进行开发，接收微信账号消息并提供自动回复、记录存储、消息推送、消息转发等功能，可通过自定义实现各种功能，诸如：社群接单机器人、人工智能机器人、聊天伴侣等。

----------

## 🚀 功能点

- **消息自动回复**：支持前端处理，支持对接后端接口实现更多功能
- **群聊白名单**：支持指定名单内群聊回复
- **私聊白名单**：支持指定名单内私聊回复
- **支持手机同时在线**：基于网页版API开发，能够在手机登录微信时，同时使用机器人
- **接入ChatGPT**：理论上4也能支持，图片暂不支持
- **PM2 进程管理**：支持服务稳定性监控、自动重启、日志管理
- **完善的错误处理**：全局错误捕获，详细的日志记录，服务异常告警

----------

## 🔥 使用

###  运行环境
  
> 请确保您的账号可以登录[网页版微信](https://wx.qq.com/)
> 不过你可以试一下，有时候也能登录本项目的微信

#### 安装 Bun
```bash
# macOS / Linux
curl -fsSL https://bun.sh/install | bash

# Windows (通过 WSL)
WSL: curl -fsSL https://bun.sh/install | bash
```

#### 运行项目

- 克隆本项目：`git clone https://github.com/labi-xiaoxin/wechat-bot-wechat4u.git`
- 进入本项目：`cd wechat-bot-wechat4u`
- 安装依赖项：`bun install`
- 自定义相关配置：
  - `config.js`: 该文件配置机器人名称、群聊白名单、私聊白名单、（如有）后端接口
  - `config-chatgpt.js`: 该文件配置ChatGPT：接口请求地址、apikey、model
  - `config-proxy.js`：国内环境下，需要使用代理才能请求ChatGPT。该文件配置相关代理：代理主机、代理端口、代理协议。如代理需要账号密码，自行调整。
  - `src/core/sendMessage.js`: 该文件内`reMsg()`方法目前有2种回复方式：
    - 1、简单返回消息：直接返回定义好的消息
    - 2、接口返回消息：将消息封装好，通过Axios发送请求至后端，后端处理返回消息（如需要实现AI机器人等功能，可自行编写后端）
    - 3、请求ChatGPT：将消息通过Axios发送请求至OpenAI，处理完成后响应消息。
- 测试项目：`bun test`
- 启动项目：`bun dev`

项目正常运行日志如下：
```log
> wechat-bot-wechat4u@1.0.0 dev
> bun run ./index.js

10:21:58 WARN 机器人启动成功 
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▀▄█▀ ▀▀ █▀█▄▀█ ▄▄▄▄▄ █
█ █   █ █▄   ▄█  ▀▄█▀▀█ █   █ █
█ █▄▄▄█ █ ▀█▀██▄▀▄  ▀▀█ █▄▄▄█ █
█▄▄▄▄▄▄▄█ ▀▄█ █ ▀ ▀▄▀ █▄▄▄▄▄▄▄█
█ ▄▀▄▀▀▄ ▀█ ▀█ ▄██▀█▄█▀ ▄▄▀▄▄▀█
██▄▀█▄█▄▀█▄▄██▀██▄▄ ▄▄  ▄ ▄  ██
█▀ ▀▀ █▄ ▀▀▀▀ ██▀▄▄█  ▀▄██▄█▄▄█
█    █ ▄▀▄ ▀█ ▀▀▀▀▀▀▀▄ ▀██ ▄ ▄█
██    ▄▄▀▄█▄▄██▄█▄ ██▄▄▀▀█▀█▄▀█
█▄█▀▀ ▀▄█▄ █▀██▀▀▀▀▀█▄▄▄▄▀██  █
█▄████▄▄▄▀▀▄  ▄▀ ▀█▄▄ ▄▄▄ █ ▀▀█
█ ▄▄▄▄▄ █▄▀▀   █▀▄▄▀█ █▄█ ▀▀ ▀█
█ █   █ █▀▀  █▀▄▀▄▄█▀▄▄   ▀▀▀██
█ █▄▄▄█ █▀▄▄ █▄▄█▀ █▀ ██▀▄▄▄▀▄█
█▄▄▄▄▄▄▄█▄▄▄█▄▄█▄█▄▄█▄█▄█▄██

二维码地址: https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Flogin.weixin.qq.com%2Fl%2FAY5C0WwogA%3D%3D
```

![image](https://github.com/labi-xiaoxin/img/blob/main/wechat-private-talk.jpg?raw=true)
![image](https://github.com/labi-xiaoxin/img/blob/main/wechat-public-room.jpg?raw=true)

## 📦 部署指南

### PM2 部署（推荐）

PM2 是一个强大的生产环境进程管理器，它可以帮助你管理和保持应用程序的在线运行。我们已经集成了 PM2 的配置（ecosystem.config.cjs），使得部署和维护变得更加简单。

1. **安装依赖**
```bash
# 安装 Bun（如果未安装）
curl -fsSL https://bun.sh/install | bash

# 安装项目依赖
bun install
```

2. **启动服务**
```bash
# 使用 PM2 启动服务
bun run start

# 查看服务状态
pm2 status
```

3. **查看日志**
```bash
# 查看实时日志
pm2 logs wechat-bot

# 查看历史日志
pm2 logs wechat-bot --lines 1000
```

4. **服务管理**
```bash
# 停止服务
bun run stop

# 重启服务
bun run restart

# 查看服务监控面板
pm2 monit
```

### PM2 特性

- **自动重启**：服务崩溃时自动重启
- **负载均衡**：可配置多进程运行（当前配置为单进程）
- **日志管理**：自动日志分割，避免日志文件过大
- **性能监控**：CPU/内存监控，异常告警
- **优雅重启**：更新代码时无缝重启，不影响服务
- **环境配置**：支持开发和生产环境配置分离

### 日志说明

日志文件位于 `logs` 目录下：
- `error.log`: 错误日志
- `combined.log`: 所有级别的日志
- `out.log`: PM2 标准输出日志
- `err.log`: PM2 错误输出日志

## 🤝 为项目添砖加瓦

欢迎提出 Contributions, issues 与 feature requests!<br />
随时查看 [issues page](https://github.com/labi-xiaoxin/wechat-bot-wechat4u/issues).

## 感谢支持 🙏

如果这个项目对你产生了一点的帮助，请为这个项目点上一颗 ⭐️