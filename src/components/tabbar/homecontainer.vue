<template>
    <div>
        <!--//轮播图区-->
        <mt-swipe :auto="4000">
            <!--<mt-swipe-item v-for="item in lunbotulist" :key="item.url"><img :src="item.img" alt=""></mt-swipe-item>-->
            <mt-swipe-item >轮播图使用vue-resouce一直报错</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../imgs/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../imgs/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodlist">
                <img src="../../imgs/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
                <img src="../../imgs/menu4.png" alt="">

                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../imgs/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../imgs/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    import {Toast } from 'mint-ui'
export  default {
    data(){
        return{
            lunbotulist:[]

        }
    },
    created(){
        this.gteLunbotu()
    },
    methods:{
        gteLunbotu(){//获取轮播图数据方法
            this.$http.get('api/getlunbo').then(result=>{
          //console.log(result.body)
                if(result.body.status===0){
                    this.lunbotulist=result.body.message;
                }else{
                    Toast('加载轮播图失败')
                }
            });
        }
    }
}
</script>

<style scoped>
.mint-swipe{
    height: 200px;
}
    .mint-swipe-item:nth-child(1){
        background-color: red;
    }
.mint-swipe-item:last-child{
    background-color: green;
}
     .mui-grid-view.mui-grid-9{
        background-color: white;
        border: 0;
    }
.mui-grid-view.mui-grid-9 img{
    width: 60px;
    height: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 13px;
    }
</style>