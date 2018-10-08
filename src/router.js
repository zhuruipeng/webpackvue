import VueRouter from 'vue-router'

import homecontainer from './components/tabbar/homecontainer.vue'
import membercontainer from './components/tabbar/membercontainer.vue'
import shopcarcontainer from './components/tabbar/shopcarcontainer.vue'
import searchcontainer from './components/tabbar/searchcontainer.vue'
import newslist  from  './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
var router = new VueRouter({
  routes: [
      {path:'/home',component:homecontainer},
      {path:'/member',component:membercontainer},
      {path:'/chart',component:shopcarcontainer},
      {path:'/search',component:searchcontainer},
      {path:'/search',component:searchcontainer},
      {path:'/home/newslist',component:newslist},
      {path:'/home/newinfo/:id',component:newsinfo},




  ],
    linkActiveClass:'mui-active' //覆盖默认的路由高亮的类，默认的类叫做router-active
})

// 把路由对象暴露出去
export default router