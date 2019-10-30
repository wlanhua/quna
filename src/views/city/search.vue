<template>
<div>
  <div class="search">
   <input type="text" class="input" placeholder="请输入城市名或拼音" v-model="keywords">
  </div>
  <div class="search-content" ref ="search" v-show="keywords">
    <ul>
      <li v-for="item of list" :key="item.id" class="search-item  border-bottom" @click="changeCity(item.name)">{{item.name}}</li>
      <li class="search-item  border-bottom" v-show="noData" >没有找到匹配的数据</li>
    </ul>
    
  </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name:"search",
    props:{
      city:Object
    },
    data() {
      return{
        keywords:'',
        timer:null,
        list:[]
      }
    },
    methods:{
      changeCity(city){
        this.chcity(city)
        this.$router.push('/')
      },
      ...mapMutations(['chcity'])
    },
    computed:{
      noData(){
        return !this.list.length

      }
    },
    watch: {
      keywords(){
        if(this.timer){
          clearTimeout(this.timer)
        }
        if(!this.keywords){
          this.list=[]
          return
        }
        this.timer = setTimeout(() => {
          const result =[]
          for(let i in this.city)
          this.city[i].forEach((value) => {
            if(value.spell.indexOf(this.keywords) > -1 || value.name.indexOf(this.keywords) > -1){
              result.push(value)
            }
            

            
          });
          this.list = result

        },100)


      }
    },
    mounted (){
      this.scroll = new Bscroll(this.$refs.search)
    },

}
</script>

<style lang="stylus" scoped>
@import'~@/assets/var.styl'
.search
 height :.72erm
 background:$bgColor
 padding : .1rem
 .input
  box-sizing :border-box
  text-align :center
  border-radius:.06rem
  color :#666
  width :100%
  padding :0 .1rem
  height :.62rem
  line-height :.62rem
.search-content
 position absolute
 right :0
 left :0
 bottom:0
 background #eee
 top:1.7rem
 z-index :1
 overflow: hidden
 .search-item
  line-height :.62rem
  text-indent :.2rem
  background-color #fff
  color :#666
  

  


</style>