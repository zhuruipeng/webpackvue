<template>

  <div class="app-container">
  <!--顶部header区域-->
    <mt-header fixed title="固定在顶部">区块链交易市场.Vue项目</mt-header>

    <!--中间路由区域-->

<router-view> </router-view>


    <!--底部tabbar区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item-l " >
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-l" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label ">会员</span>
      </router-link>
      <router-link class="mui-tab-item-l" to="/chart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label ">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-l" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>






  </div>

</template>

<script>

</script>


<style lang="" scoped>
.app-container{
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.v-enter
{
  opacity: 0;
  transform: translatex(100%);
}

.v-leave-to{
  opacity: 0;
  transform: translatex(-100%);
  position: absolute;

}
  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
.mui-bar-tab .mui-tab-item-l {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

</style>
