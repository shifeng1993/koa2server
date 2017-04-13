# Koa2APIServer
一个使用koa2构建的API服务端。
#### 技术栈：
- shell
- nodejs
- koa2
- pm2
- es6/7
- mockjs

## 使用方法

`git clone https://github.com/shifeng1993/koa2server.git server`

`cd server`

`npm install`

三选一
`supervisor app` / `node app` / `./shell.sh`

## 项目结构
`app.js`为主文件，平时做模拟数据用`supervisor`启动即可（没有的话用npm安装），也可以用`node`启动。

`routes`目录下为api路由。对应添加即可。

`controllers`目录下为api数据的控制，更改以及序列化。

`models`目录下为对数据的读写。应以函数式为主要开发思想。

shell守护进程脚本用 `./shell.sh`启动。如果遇到权限错误，请先输入`chmod 777 shell.sh`改写权限后，再行启动。

注意：shell脚本依赖pm2 请先进行全局安装后再启动 `npm install -g pm2`

## 版本特性
#### 1.0.0
1.使用了koa2当做项目底层，node版本要求为大于7.6.0

2.使用了es6/7新特性来做并发，性能更高。

3.使用了shell脚本用 pm2 来守护进程，更稳定。

4.使用了mockjs模拟假数据。

## 待添加特性
1.对数据库的支持，读写。

2.中间层服务代理

