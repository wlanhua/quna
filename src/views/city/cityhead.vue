<template>
  <div class="header">
    城市选择
    <router-link to="/">
    <div class="iconfont head-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
    name:"chead"

}
</script>

<style lang="stylus" scoped>
@import'~@/assets/var.styl'
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