const router = require('koa-router')();

/* ================引入逻辑模块=============== */
// 用户模块
const index = require('../controllers/index/index.js');

// cors 处理跨域
router.all('/api/*', async(ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHead' +
            'erFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH');
    if (ctx.method == 'OPTIONS') {
        ctx.status = 200;
    } else {
        await next();
    }
});

/* ================以下是api模块=============== */

// 获取商品
router.get('/api/goods', index.goods)

module.exports = router;
