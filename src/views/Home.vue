<template>
  <div class="home">
    <header1 ></header1>
    <homeswiper :list="swiperList"></homeswiper>
    <home-icon :list="iconList"></home-icon>
    <home-rec :list="recommendList"></home-rec>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import header1 from './home/head'
import homeswiper from './home/swiper1'
import homeIcon from './home/homeIcon'
import homeRec from './home/recomand'
import homeWeekend from './home/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    header1,
    homeswiper,
    homeIcon,
    homeRec,
    homeWeekend
  },
  computed:{
    ...mapState({
      city:'city'
    })
  },
  data (){
    return{
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
      lastCity:''
    }
  },
  methods:{
    getHomeInf (){
      axios.get('/api/index.json?city=' + this.city)
      .then(this.getHomeInfSuc)
    },
    getHomeInfSuc (res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList =data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      }
    
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInf()
  },
  activated() {
    if(this.lastCity !== this.city ) {
      this.lastCity = this.city
      this.getHomeInf()
    }
  }

}
</script>
