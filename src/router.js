import VueRouter from 'vue-router'

import homecontainer from './components/tabbar/homecontainer.vue'
import membercontainer from './components/tabbar/membercontainer.vue'
import shopcarcontainer from './components/tabbar/shopcarcontainer.vue'
import searchcontainer from './components/tabbar/searchcontainer.vue'
import newslist  from  './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photo/pholist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodsList from './components/goods/goodlist.vue'
import goodsinfo from './components/goods/goodinfo.vue'

var router = new VueRouter({
  routes: [
      {path:'/home',component:homecontainer},
      {path:'/member',component:membercontainer},
      {path:'/chart',component:shopcarcontainer},
      {path:'/search',component:searchcontainer},
      {path:'/search',component:searchcontainer},
      {path:'/home/newslist',component:newslist},
      {path:'/home/newinfo/:id',component:newsinfo},
      {path:'/home/photolist',component:photolist},
      {path:'/home/photoinfo',component:photoinfo},
      {path:'/home/goodlist',component:goodsList},
      {path:'/home/goodsinfo',component:goodsinfo},




  ],
    linkActiveClass:'mui-active' //覆盖默认的路由高亮的类，默认的类叫做router-active
})

// 把路由对象暴露出去
export default router