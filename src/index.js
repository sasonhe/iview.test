"use strict"
import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import App from './App.vue'
// 引入路由配置
import routes from './router.config'
import 'iview/dist/styles/iview.css'
//全局样式重置
// import reset from './common/reset.css'
// 注册路由
Vue.use(VueRouter)
Vue.use(iView)
// Vue.use(VueResource)

var router = new VueRouter({
    routes
})

new Vue({
    el : '#app',
    router,
    render : function(h){
        return h(App)
    }
})
