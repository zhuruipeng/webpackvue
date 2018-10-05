//入口文件
import Vue from 'vue'
//导入app组件
import app1 from './App.vue'
//按需导入mint-ui中的组件
import { Header } from 'mint-ui';

import './lib/mui/css/mui.css'
Vue.component(Header.name, Header);

var vm = new Vue({
  el:'#app',
  data:{},
    render:function (Creamenthtml) {
        return Creamenthtml(app1)
    },
    components:{
      app1
    }
})