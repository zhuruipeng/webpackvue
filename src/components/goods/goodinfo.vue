<template>
    <div class="goodsinfo-container">
 <!--商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                </div>
            </div>
        </div>
        <!--商品参数区域-->

        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>

        </div>

        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>

        </div>
    </div>

</template>

<script>
// export default {
//     data(){
//         return{
//             id:this.$router.params.id,//将路由参数的id挂在到data方便调用
//             lunbotu:[]
//         }
//     },
//     created(){
//         this.getLunbotu()
//     },
//     methods:{
//         getLunbotu(){
//             this.$http.get('./api/gett'+this.id).then(result=>{
//                if(result.body.status===0) {
//                    this.lunbotu = result.body.message;
//
//                }
//             })
//         }
//     }
// }
</script>

<style scoped>
    .goodsinfo-container{
        background-color: #ddd;
        overflow: hidden;
    }

</style>