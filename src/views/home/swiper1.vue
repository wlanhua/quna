<template>
<div class="wrap">
    <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id" >
        <img :src="item.imgUrl" class="swiper-img">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
  </swiper>
</div>
</template>
<script>
export default {
    name:"swiper1",
    props:{
        list:Array
    },
    data (){
        return{
            swiperOption: {
                pagination:".swiper-pagination",
                //页码表示的小点
                loop:true
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrap >>> .swiper-pagination-bullet-active
 background-color #fff
.wrap
 overflow:hidden
 width :100%
 height :0
 padding-bottom:29%
 background-color:#eeee
.swiper-img
 width: 100%
</style>