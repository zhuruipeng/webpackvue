<template>

    <div>

        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0?' mui-active':'']" v-for="item in cates" :key="item.id"
                       @click="getphotolistbycateid(item.id)"
                    >
                        {{itme.title}}
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                </div>
            </div>

        </div>
        <!--图片列表区域-->
        <ul class="photolist">
            <!--<li v-for="item in list" :key="item.id">-->
                <!--<img v-lazy="item.img_url" class="listimg">-->
            <!--<router-link :to="'/home/photoinfo/'+item.id" v-for="item in list" :key="item" tag="li">-->
            <router-link to="/home/photoinfo" v-for="item in list" :key="item" tag="li">
                <img v-lazy="item" class="listimg">

                <div class="info">
                <h1 class="infotitle">{{item.title}} biaotiyo有了吧吧吧不安保啊</h1>
                    <div class="info-body">{{item.zhaoyao}}hahah飞啊飞啊发分费啊faf 区分ahah</div>
                </div>
            </router-link>
        </ul>

    </div>
</template>
<script>
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        data() {
            return {
                cates: [],
                list: ['src/components/photo/1.JPG','src/components/photo/2.JPG',
                    'src/components/photo/1.JPG','src/components/photo/2.JPG',
                    'src/components/photo/1.JPG','src/components/photo/2.JPG',
                    'src/components/photo/1.JPG','src/components/photo/2.JPG',
                    'src/components/photo/1.JPG','src/components/photo/2.JPG',
                    'src/components/photo/1.JPG','src/components/photo/2.JPG',
                    'src/components/photo/1.JPG','src/components/photo/2.JPG',
                    'src/components/photo/1.JPG','src/components/photo/2.JPG',
                    'src/components/photo/1.JPG','src/components/photo/2.JPG',
                    'src/components/photo/1.JPG','src/components/photo/2.JPG',
                    'src/components/photo/1.JPG','src/components/photo/2.JPG',
                    'src/components/photo/1.JPG','src/components/photo/2.JPG'
                ]
            }
        },
        created() {
            this.getallcategory()
            this.getphotolistbycateid(0)
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getallcategory() {
                this.$http.get("api/getimgcategory").then(result => {
                    if (result.body.status === 0) {
                        //拼着出一个最完成的分类
                        result.body.message.unshift({title: "quanbu", id: 0})
                        this.cates = reslut.body.message
                    } else {
                        alert("cuowu")
                    }
                })
            },
            getphotolistbycateid(cateid){
                this.$http.get("api/getimages/"+cateid).then(result=>{
                    if(result.body.status===0){
                        this.list=result.body.message
                    }
                })
            }
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        touch-action: pan-y;
    }

    img[lazy=loading] {
        width: 340px;
        height: 200px;
        margin: auto;
    }
    .listimg{
        width: 340px;
        height: 200px;
        margin: 0 auto;
        vertical-align: middle;
        box-shadow: 0 0 9px #999;
        position: relative;
    }
    .photolist{
        list-style:none;
        background: #cccccc;
    }
    .info{
        position: absolute;
        bottom:300px;
        left: 0;
        color: white;
        text-align: left;
        background-color: rgba(0 0 0 0.4);
        max-height: 40px;

    }
    .info .infotitle{
        font-size: 14px;
    }
    .info .info-body{
        font-size:13px
    }


</style>