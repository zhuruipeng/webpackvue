<!--这是轮播图组件封装-->
<template>
    <div>
        <mt-swipe :auto="4000">
            <!--<mt-swipe-item v-for="item in lunbotulist" :key="item.url"><img :src="item.img" alt=""></mt-swipe-item>-->
            <mt-swipe-item >轮播图使用vue-resouce一直报错</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "swiper"
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