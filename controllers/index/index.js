const indexModel = require("../../models/index/index.js");

class indexController {
    // 获取商品
    static async goods(ctx, next) {
        await next();
        function callback(res) {
            ctx.response.body = res;
        }
        indexModel.goods('goods', res => callback(res));
        // await ……
    }

}
module.exports = indexController;