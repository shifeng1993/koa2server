const goodModel = require("../../models/goods/index.js");

class indexController {
    /*mock数据示例*/
    // 获取商品
    static async goods(ctx, next) {
        await next();
        function callback(res) {
            ctx.response.body = res;
        }
        goodModel.goods('goods', res => callback(res));
    }
    // 与数据库连接，控制器示例
    static async create(ctx, next) {
        if (!ctx.request.query.title || !ctx.request.query.content) {
            return next(new Error('parmas error'));
        }
        const Post = ctx.request.models.post;
        const doc = await Post.create({title: ctx.request.query.title, content: ctx.request.query.title});
        ctx.body = JSON.stringify(doc);
    }
}
module.exports = indexController;