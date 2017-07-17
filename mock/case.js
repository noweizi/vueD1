/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */
var Mock = require('mockjs')
// var Random = Mock.Random

module.exports = {
  api: '/api/case',
  response: function (req, res) {
    res.send([
      {
        title: '中国',
        number: 'first',
        name: 'guides',
        RouterName: '/guides',

      }, {
        title: '港澳台',
        number: 'second',
        name: 'hmt',
        RouterName: '/guides/hmt'
      }, {
        title: '日韩',
        number: 'three',
        name: 'japanK',
        RouterName: '/guides/japanK'
      }, {
        title: '东南亚',
        number: 'four',
        name: 'southAsia',
        RouterName: '/guides/southAsia'
      }, {
        title: '欧美',
        number: 'five',
        name: 'eurA',
        RouterName: '/guides/eurA'
      }, {
        title: '澳非',
        number: 'six',
        name: 'ausAfri',
        RouterName: '/guides/ausAfri'
      }
    ]);
  }
}