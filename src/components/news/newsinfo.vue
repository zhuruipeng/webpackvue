<template>
    <div class="newsinfo">

        <h3 class="title">新闻标题{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>点击次数{{newsinfo.add_time|dataFormat}}</span>
            <span>发表时间{{newsinfo.click}}</span>
        </p>

        <hr>
        <div class ='content' v-html ='newsinfo.content'> </div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>


<script>
    import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsinfo:[]
        }
    },
    created(){
        this.getnewsinfo()
    },
    methods:{
        getnewsinfo(){
           this.$http.get('api/getnew'+'this.id').then(function () {
               if (result.body.status===0){
this.newsinfo= result.body.message[0]
               }else{
                  Toast("获取新闻失败")
               }
           })
        }
    },
    components:{
    "comment-box":comment
    }
}

</script>


<style scoped>
    .newsinfo{
        padding: 0 4px;
    }
    .title{
        font-size: 16px;
        text-align: center;
        margin:15px 0;
        color: red;

    }
    .subtitle{
        font-size: 13px;
        display: flex;
        justify-content: space-between;

    }
</style>