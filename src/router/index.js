import App from '../App'
//路由懒加载
const home = r => require.ensure([], () => r(require('../views/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../views/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../views/msite/msite')), 'msite')
const food = r => require.ensure([], () => r(require('../views/food/food')), 'food')
const shop = r => require.ensure([], () => r(require('../views/shop/shop')), 'shop')

//淘宝案例路由
const taobHome = r => require.ensure([], () => r(require('../views/taobHome/home')), 'taobHome')
const taobList = r => require.ensure([], () => r(require('../views/taobList/goodsList')), 'taobList')
const taobGoodsDetail = r => require.ensure([], () => r(require('../views/taobGoodsDetail/goodsDetail')), 'taobGoodsDetail')
const taobMe = r => require.ensure([], () => r(require('../views/taobme/')), 'taobMe')
export default[{
    path:'/',
    component:App, //顶层路由,对应index.html
    children:[ //二级路由 对应APP.vue
        //地址为空时跳转hello页面
        {
            path:'',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home,
            meta: {title: '首页'}
        },
        //当前选择城市页
        {
            path: '/city/:cityid',
            component: city
        },
        //所有商铺列表页
        {
            path: '/msite',
            component: msite
        },
        //特色商铺列表页
        {
            path: '/food',
            component: food
        },
        //商铺详情页
        {
            path: '/shop',
            component: shop,
            children: []
        },
        //淘宝首页
        {
            path: '/taobHome',
            component: taobHome
        },
        //淘宝产品列表
        {
            path: '/taobList',
            component: taobList
        },
        //淘宝产品详情
        {
            path: '/taobGoodsDetail',
            component: taobGoodsDetail,
            meta: {
                hideTabs: false, 
                title: '淘宝产品详情'
            }
        },
        {
          path: '/taobMe',
          component: taobMe,
          meta: {
            requiresAuth: false,
            title: '个人中心'
          }
        }
    ]
}]