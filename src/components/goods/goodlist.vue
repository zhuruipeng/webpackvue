<template>
    <div class="goods-list">
        <!--<div class="gooditem" v-for="item in goodlist" :key="itme.id">-->
            <!--<img :src="item.img_url" alt="">-->
            <!--<div class="title">小米手机-->
                <!--小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机</div>-->
            <!--<div class="info">-->
            <!--<p class="price">-->
                <!--<span class="now">-->
                  <!--{{item.sell_priece}}-->
                <!--</span>-->
                <!--<span class="span old">￥2222</span>-->
            <!--</p>-->
            <!--<p class="sell">-->
                <!--<span>热卖中</span>-->
                <!--<span>剩余60件</span>-->
            <!--</p>-->
            <!--</div>-->
        <!--</div>-->
        <!--<router-link to="/home/goodsinfo" class="gooditem" tag="div">-->
            <!--<img src="https://img14.360buyimg.com/mobilecms/s200x200_jfs/t24991/206/1351812908/162442/cea65b7c/5baf3b0cN98673bec.jpg!q70.dpg"-->
                 <!--alt="">-->
            <!--<div class="tltle">小米手机</div>-->
            <!--<div class="info">-->
                <!--<p class="price">-->
                <!--<span class="now">-->
                    <!--￥2341-->
                <!--</span>-->
                    <!--<span class="span old">￥2222</span>-->
                <!--</p>-->
                <!--<p class="sell">-->
                    <!--<span>热卖中</span>-->
                    <!--<span>剩余60件</span>-->
                <!--</p>-->
            <!--</div>-->
        <!--</router-link>-->
        <!--在网页中有两种跳转方式 方式1 使用a标签叫做标签跳转  方式2 使用window。location，href-->
        <div  class="gooditem"  @click="gotail()">
            <img src="https://img14.360buyimg.com/mobilecms/s200x200_jfs/t24991/206/1351812908/162442/cea65b7c/5baf3b0cN98673bec.jpg!q70.dpg"
                 alt="">
            <div class="tltle">小米手机</div>
            <div class="info">
                <p class="price">
                <span class="now">
                    ￥2341
                </span>
                    <span class="span old">￥2222</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>

        <div class="gooditem">
            <img src="https://img14.360buyimg.com/mobilecms/s200x200_jfs/t24991/206/1351812908/162442/cea65b7c/5baf3b0cN98673bec.jpg!q70.dpg"
                 alt="">
            <div class="tltle">小米手机</div>
            <div class="info">
                <p class="price">
                <span class="now">
                    ￥2341
                </span>
                    <span class="span old">￥2222</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>

    </div>
</template>


<script>
    export default {
        //data是往自己组件内部挂在一些私有数据
        data
            () {
            return {
                pageIndex: 1,//分页的页数
                goodlist: [] //存放商品列表的数组
            }

        },
        created() {
            this.getgoodslist()
        },
        methods: {
            getgoodslist() {
                this.$http.get('api/get?pageindex=' + this.pageIndex).then(result => {
                    if (result.body.status === 0) {
                        this.goodlist =this.goodlist.concat(result.body.message);
                    }
                })
            },
            getmore(){
                this.pageIndex ++
                this.getgoodslist()
            },
            //注意一定要区分this.$route 和this.$router这两个对象
            //this.$route是路由参数对象，所有的路由中的参数params
            //this.$router是一个路由导航对象，用它可以方便的使用js代码是线路有的前进后退，跳转到新的URL地址
            gotail(){
               // this.$router.push("/home/goodsinfo")
               this.$router.push({path:"/home/goodsinfo"})

            }
        }
    }
</script>


<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 9px;
    justify-content: space-between;
}
    .gooditem{
        felx:20%;
        width: 170px;
        border:1px solid #ccc;
        box-shadow: 0  0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-height: 292px;
    }
    .gooditem img{
        width: 100%;
    }

    info{
        background-color: #eee;

    }
    p{
        margin: 0;
        padding: 5px;
    }
    .price .now{
        color: red;

    }
    .price .old{
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
    }
    .title{
        font-size: 14px;
    }

    .sell{
        display: flex;
        justify-content: space-between;
        font-size: 12px;

    }
</style>