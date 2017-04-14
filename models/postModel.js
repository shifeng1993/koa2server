// 模型对应数据库表，一个模型一张表
const Waterline = require('waterline')

module.exports = Waterline.Collection.extend(
{
    // 数据表名
  identity:'post',
    //   连接
  connection:'mysql',
    //   字段 
  attributes: {
    name:{type:'string'},
    title:{type:'string'},
    content:{type:'string'}
  }
})