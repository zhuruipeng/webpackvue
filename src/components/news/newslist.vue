<template>

    <div>
        <h3>新闻列表</h3>
        <ul class="mui-table-view">
            <li  v-for="item in newslist" :key="item.id" class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsinfo'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                       <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time|dateFormat}}</span>
                            <span>点击次数:{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left" src="https://avatar.csdn.net/7/5/2/3_u012605477.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--<h1>幸福</h1>-->
                        <!--<p class='mui-ellipsis'>-->
                            <!--<span>发表时间：2012-12-12：12:12</span>-->
                            <!--<span>点击次数:0</span>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left" src="https://avatar.csdn.net/7/5/2/3_u012605477.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--<h1>幸福</h1>-->
                        <!--<p class='mui-ellipsis'>-->
                            <!--<span>发表时间：2012-12-12：12:12</span>-->
                            <!--<span>点击次数:0</span>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->

        </ul>
    </div>
</template>

<script>
export  default {
    data(){
        return{
            newslist:[]
        };
    },
    created(){
       this.getNewlist()
    },
    methods:{
        getNewlist(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status===0){
                    this.newlist=result.body.message
                }else{
                    Toast("failed")
                }
            })
        }
    }
}

</script>

<style lang="" scoped>
    .mui-table-view li h1{
        font-size: 14px;
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
    }

    .mui-table-view  .mui-ellipsis span{
        font-size: 12px;
        color: #2266ff;
    }

</style>