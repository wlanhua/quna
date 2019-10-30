<template>
    <div class="header">
        <div class="head-left"><div class="iconfont back-icon">&#xe624;</div></div>
        <div class="head-input"><span class="iconfont ">&#xe632;</span>输入城市/景点/游玩主题</div>
        <router-link to="/city"> 
        <div class="head-right">{{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
        </router-link>

    </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex'
export default {
    name:"homehead",
    computed:{
        ...mapState(['city']),
        //mapstate是指把vuex里的数据映射到此组件的computed的属性里，这句话是指把vuex的city数据映射到city的计算属性里
        ...mapGetters(['doubleCity'])
    }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/var.styl'
.header
 line-height:$hederHeigth
 background-color:$bgColor
 display:flex
 color :#fff
.head-left
  width :.64rem
  float:left
  .back-icon
   font-size:.4rem
   text-align:center
.head-input
 flex:1
 border-radius: .1rem
 background-color: #fff
 height :.64rem
 margin-top:.1rem
 margin-left :.2rem
 color :#ccc
 line-height :.64rem
 padding-left:.2rem
.head-right
 min-width:1.04rem
 padding :0 .1rem
 float:right
 text-align :center
 color :#fff
 .arrow-icon
  font-size:.24rem
</style>