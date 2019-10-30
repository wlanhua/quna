<template>
  <div class="list" ref="wrap">
    <div>
      <div class="area ">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
              <div class="button-wrap">
                <div class="button">{{this.currentCity}}</div>
                </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
              <div class="button-wrap" v-for="item of hot" :key="item.id" @click="changeCity(item.name)">
                <div class="button">{{item.name}}</div>
                </div>
          </div>
      </div>
      <div class="area" v-for="(item,key) of city" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list" v-for="inneritem of item" :key="inneritem.id" @click="changeCity(inneritem.name)">
              <div class="item border-bottom">{{inneritem.name}}</div>
          </div>
      </div>
    </div>
      </div>
</template>

<script>
import Bscroll from'better-scroll'
import { mapState,mapMutations } from 'vuex'
export default {
  name:"list",
  props:{
    city:Object,
    hot:Array,
    letter:String
  },
  computed:{
    ...mapState({
      currentCity: 'city'
      //把vuex的city公用数据映射到计算属性，名字为currentCity
    })
   
  },
  methods: {
    changeCity(city){
      // this.$store.dispatch('changeCity',city)
      //没有复杂的同步以及异步操作可以不用actions直接用mutations，通过commit调用
      // this.$store.commit('chcity',city)
      this.chcity(city)

      this.$router.push('/')
    },
     ...mapMutations(['chcity'])
     //把chcity这个mutation映射到此组件名为chcity的方法里

    },
  
   watch: {
    letter () {
      if(this.letter){
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }

   }
 },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrap)

  }

}
</script>

<style lang="stylus" scoped>
 .border-topbottom
  &:after
   border-color :#ccc
  &:before
   border-color :#ccc
 .border-bottom
  &:before
   border-color :#ccc
 .list
  overflow:hidden
  position:absolute
  top:1.7rem
  left:0
  bottom:0
  right:0
  .title
   background :#eee
   height :.44rem
   width :100%
   padding-left :.2rem
   line-height :.44rem
   font-size :.26rem
  .button-list
   padding :.1rem .6rem .1rem .1rem
   overflow hidden
   .button-wrap
    float left
    width :33.3%
    .button
     text-align:center
     border:.02rem solid  #666
     margin :.1rem
     padding :.1rem 
     border-radius :.06rem
  .item-list
   .item
     line-height :.76rem
     padding-left :.2rem
 
   


</style>