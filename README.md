<!--
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: xiaoxin
 * @Date: 2024-02-27 18:48:36
 * @LastEditors: xiaoxin
 * @LastEditTime: 2024-02-28 11:02:16
-->
<p align="center">
	<strong>欢迎使用👏🏻wechat-bot-wechat4u</strong>
</p>
<a href="#" target="_blank">
    <img alt="License: Apache-2.0" src="https://img.shields.io/badge/License-Apache2.0-red.svg" />
</a>

----------

## 🌆 简介

wechat-bot-wechat4u，基于`wechat4u`进行开发，接收微信账号消息并提供自动回复、记录存储、消息推送、消息转发等功能，可通过自定义实现各种功能，诸如：社群接单机器人、人工智能机器人、聊天伴侣等。

----------

## 🚀 功能点

- **消息自动回复**：支持前端处理，支持对接后端接口实现更多功能
- **群聊白名单**：支持指定名单内群聊回复
- **私聊白名单**：支持指定名单内私聊回复
- **支持手机同时在线**：基于网页版API开发，能够在手机登录微信时，同时使用机器人

----------

## 🔥 使用

###  NodeJS运行
  
> 请确认NodeJS版本为18.0.0
> 请确保您的账号可以登录[网页版微信](https://wx.qq.com/)

- 克隆本项目：`git clone https://github.com/labi-xiaoxin/wechat-bot-wechat4u.git`
- 进入本项目:`cd wechat-bot-wechat4u`
- 安装依赖项:`npm install`
- 自定义相关配置：
  - `config.js`:该文件配置机器人名称、群聊白名单、私聊白名单、（如有）后端接口
  - `src/core/sendMessage.js`:该文件内`reMsg()`方法目前有2种回复方式：
    - 简单返回消息：直接返回定义好的消息
    - 接口返回消息：将消息封装好，通过Axios发送请求至后端，后端处理返回消息（如需要实现AI机器人等功能，可自行编写后端）
- 启动项目:`npm run dev`

项目正常运行日志如下：
```log
> wechat-bot-wechat4u@1.0.0 dev
> node ./index.js

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
█▄▄▄▄▄▄▄█▄▄▄█▄▄█▄█▄▄█▄▄█▄█▄█▄██

二维码地址: https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Flogin.weixin.qq.com%2Fl%2FAY5C0WwogA%3D%3D
```

![image](https://github.com/labi-xiaoxin/img/blob/main/wechat-private-talk.jpg?raw=true)
![image](https://github.com/labi-xiaoxin/img/blob/main/wechat-public-room.jpg?raw=true)
## 🤝 为项目添砖加瓦

欢迎提出 Contributions, issues 与 feature requests!<br />
随时查看 [issues page](https://github.com/labi-xiaoxin/wechat-bot-wechat4u/issues).

## 感谢支持 🙏

如果这个项目对你产生了一点的帮助，请为这个项目点上一颗 ⭐️