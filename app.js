/*
 * 名称：koa2mvc服务；
 * 作用：1.使用mock假数据做api服务，2.使用真实数据库做api服务,3.做真实api的代理转发。
 * 技术栈：koa2，es7
 * 作者：haise
 */

/* =================以下是引入模块=======================*/
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const onerror = require('koa-onerror');
const app = new Koa();

// 引入路由
const index = require('./routes/index');

// 错误处理
onerror(app);

// 定义本地服务端口
const host = 'http://127.0.0.1:';
const port = 3333; //设置本地服务端口

// 中间件
app.use(bodyparser());
app.use(json());

//资源加载记录log
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(port, () => console.log("服务已经启动，APIhost：" + host + port));

// 引入路由文件
app.use(index.routes(), index.allowedMethods());

