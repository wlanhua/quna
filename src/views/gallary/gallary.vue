<template>
  <div class="container" @click="closeGallary">
    <div class="wrap">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide  v-for="(item,index) in img" :key="index">
        <img :src="item" class="wrap-img">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
  </swiper>
    </div>

  </div>
</template>

<script>
export default {
  name:"gallary",
  props:{
    img:{
      type:Array,
      default:['//img1.qunarzz.com/sight/p0/1712/8c/8c5a41652f95504ea3.img.jpg_r_800x800_74bef18a.jpg',
            'http://img1.qunarzz.com/sight/p0/1712/8c/8c5a41652f95504ea3.img.jpg_r_800x800_74bef18a.jpg']
    }
  },
  data (){
   return {
      swiperOption:{
        pagination:'.swiper-pagination',
        paginationType:'fraction',
        observeParents:true,
        observer:true
      }
   }
  },
  methods:{
    closeGallary(){
      this.$emit('close')
    }
  }

}
</script>

<style lang="stylus" scoped>
.wrap >>> .swiper-container
 overflow :inherit
.container
 position fixed
 top:0
 bottom :0
 left :0
 right :0
 background-color #000
 z-index :99
 display:flex
 justify-content :center
 flex-direction :column
 .wrap
  height :0
  width :100%
  padding-bottom :100%
  .swiper-pagination
   color :#fff
   margin-bottom :-1rem
  .wrap-img
   width :100%



</style>