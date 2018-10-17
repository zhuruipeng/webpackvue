<template>


    <div>
        <h1>
标题
            <!--{{photoinfo.title}}-->
        </h1>
    <p class="subtitle">
        <span>发表时间</span>
        <!--<span>点击{{photoinfo.click}}</span>-->
        <span>点击</span>


    </p>
        <hr>

<div class="content" v-html="photoinfo.content">安抚；额加分垃圾法尔加；发</div>

        <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">
<cmt-box></cmt-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    import VuePreview from 'vue-preview'


    export default {
    data(){
        return{
            id:this.$route.params.id,
            photoinfo:{content:'<h1>wo</h1>'},
            list: [{
                src:'src/components/photo/1.JPG',
            w:600,h:600
            },
                {
                    src:'src/components/photo/2.JPG',
                    w:600,h:600
                },
            ]
        }
    },
    created(){
        this.getphotoinfo()
    },
    methods:{
        getphotoinfo(){
            this.$http.get('api/getimageinfo/'+this.id).then(reuslt=>{
                if(result.body.status===0){
this.photoinfo = result.body.message[0]
                }
            })
        },

    },
    components:{
      'cmt-box':  comment
    }
}
</script>

<style>
.subtitle{
    display: flex;
    justify-content: space-between;
}

</style>