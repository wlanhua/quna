<template>
  <div>
      <router-link class="abs" to="/" tag="div" v-show="showabs"><span class="iconfont abs-icon">&#xe624;</span></router-link>
      <div class="fixed"
       v-show="!showabs" 
       >
        <div class="header">
    
    景点详情
    <router-link to="/">
    <div class="iconfont head-icon">&#xe624;</div>
    </router-link>
  </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"dhead",
  data(){
    return{
      showabs:true,
      // opacityStyle: {
      //   opacity: 0
      // }
    }
  },
  methods:{
     handleScroll () {
      const top = document.documentElement.scrollTop
      console.log(top)
      if (top > 30) {
      //   let opacity = top / 140
      //   opacity = opacity > 1 ? 1 : opacity
      //   this.opacityStyle = { opacity }
        this.showabs = false
      } 
      else{
        this.showabs = true
      }
    }
     },
  activated(){
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated(){
    window.removeEventListener('scroll',this.handleScroll)
  }

}
</script>

<style scoped lang="stylus">
@import'~@/assets/var.styl'
.abs
 position absolute
 top :.2rem
 left :.2rem
 width :.8rem
 height :.8rem
 line-height :.8rem
 text-align :center
 border-radius :.4rem
 background :rgba(0,0,0,.8)
 .abs-icon
  color #fff
  fontsizt:.4rem
.fixed
 position fixed
 top:0
 right :0
 left :0
 width :100%
 .header
  position relative
  height :$hederHeigth
  color :#fff
  overflow hidden
  background :$bgColor
  text-align :center
  line-height :$hederHeigth
 .head-icon
  width :.64rem
  font-size:.4rem
  color: #fff
  position:absolute
  top:0
  left:0
</style>