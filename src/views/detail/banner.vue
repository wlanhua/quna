<template>
<div>
    <div class="banner" @click="clickgallary">
        <img :src="this.bannerImg" class="img">
        <div class="info">
            <div class="title">{{this.sightName}}</div>
            <div class="number" ><span class="iconfont banner-icon">&#xe692;</span>{{this.bannerImgs.length}}</div>
        </div>
    </div>
    <fade>
    <gallary :img="bannerImgs" v-show="gallary" @close="closegallary" ></gallary>
    </fade>
    </div>
</template>
<script>
import gallary from '@/views/gallary/gallary'
import fade from '../fade/fade'
export default {
    name:"detailhead",
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    components:{
        gallary,
        fade

    },
    data (){
        return{
            imgs:['http://img1.qunarzz.com/sight/p0/1712/b8/b8f736e02bd72cbca3.img.jpg_r_800x800_c81871a7.jpg',
            'http://img1.qunarzz.com/sight/p0/1712/8c/8c5a41652f95504ea3.img.jpg_r_800x800_74bef18a.jpg'],
            gallary:false
        }
    },
    methods:{
        clickgallary (){
            this.gallary = true
        },
        closegallary(){
            this.gallary = false
        }
    }
}
</script>
<style scoped lang="stylus">
.banner
 overflow hidden
 height :0
 padding-bottom :55%
 position relative
 .img
  width :100%
 .info
  display :flex
  line-height :.6rem
  position absolute
  bottom :0
  left: 0
  right :0
  background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
  color :#fff
  .title
   flex :1
   font-size :.32rem
   padding :0 .2rem
  .number
   border-radius :.2rem
   height :.32rem
   line-height :.32rem
   background:rgba(0,0,0,0.8)
   margin-top :.14rem
   font-size :.24rem
   padding :0 .4rem
   .banner-icon
    font-size :.24rem
</style>