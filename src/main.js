
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLazyload  from 'vue-lazyload' 
import routes from './router/index'
import store from './store/'
import {routerMode} from './config/env'
import './service/rem'

Vue.use(VueRouter)
//图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
})

const router = new VueRouter({
    routes,
    mode: routerMode,
    strict: process.env.NODE_ENV !== 'production'
})
//表示路由正在发生改变[异步解析执行]  to: 即将要进入的目标 路由对象 from: 当前导航正要离开的路由
router.beforeEach(function(to,from,next){
  //some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。[不会对空数组进行检测,不会改变原始数组]
  console.log("*****************")
  // store.commit([UPDATE_SHOWTABS], {hideTabs: to.matched.some(record => record.meta.hideTabs)})
  next();
})

//调用vm.$mount方法，来执行模板渲染
new Vue({
    router,
    store
}).$mount('#app')