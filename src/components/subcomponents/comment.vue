<template class="cmt-container">
    <div>
     <h3>发表评论</h3>
        <hr>

        <textarea placeholder="最多不超过120字" maxlength="120">

        </textarea>
        <!--mt的按钮-->
        <mt-button type="primary" size="large" @click="postmessage">发表评论

        </mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">

                <div class="cmt-title">
                    {{i+1}}&nbsp; &nbsp;{{item.user_name}} 用户 发表时间{{item.add_time|dataFormat}}

                     <div class="cmt-body">
                      你好{{item.content ==='undefined'?'此用户很烂':item.content}}
                    </div>
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large " plain @click="getmore">加载更多

        </mt-button>
    </div>
</template>
<script>
    import  {Toast} from 'mint-ui'
export default {

    data(){
        return{
pageIndex:1, //默认展示第一页数据
comments:[],
            msg:''//评论输入的内容

        }
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){
            this.$http.get('/api/getcomments/:'+
                this.id+'?pageindex=1').then(function () {
                if(result.body.status===0){
            //
                    this.comments= this.comments.concat(this.comments=result.body.message)
                }else{

                }
            })
        },
        getmore(){
            this.pageIndex++;
            this.getComments()
        }

    },
    props:['id'],
    postmessage(){
        if(this.msg.trim().length===0){
            return Toast("评论内容不能为空")
        }
        this.$http.post("api/postcomment"+this.$route.params.id,{content:this.msg.trim()}).then(function () {
if(result.body.status===0){
    var cmt ={
        user_name:"匿名用户",
        add_time:Date.now,
        content:this.msg.trim()
    }
    this.comments.unshift(cmt);
    this.msg='';
}
        })
    },

}
</script>
<style scoped>
    .cmt-container{
        font-size: 16px;



    }

.cmt-body{
    text-indent: 2em;
}
</style>