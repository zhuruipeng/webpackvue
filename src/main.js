//导入路由模块
import  vueRouter from 'vue-router'
//安装路由
Vue.use(vueRouter)

//导入自己的router.js路由模块
import  router from './router'
//入口文件
import Vue from 'vue'
//导入app组件
import app1 from './App.vue'
//按需导入mint-ui中的组件

//导入vue-resource
import  vueResouce from 'vue-resource'
Vue.use(vueResouce)
//全局配置
Vue.http.options.root = 'http://vue.studyit.io';
//定义全局过滤器
//导入时间插件
import moment from 'moment'
Vue.filter('dateFormat',function (dataStr,patter='YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(patter)
})

import { Header, Swipe, SwipeItem  Button} from 'mint-ui';

import './lib/mui/css/mui.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button);

var vm = new Vue({
  el:'#app',
  data:{},
    render:function (Creamenthtml) {
        return Creamenthtml(app1)
    },
    components:{
      app1
    },
    router
})