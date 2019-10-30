<template>
<div>
    <banner 
    :sightName="sightName"
    :bannerImg="bannerImg"
    :bannerImgs="gallaryImgs"
    ></banner>
    <dhead></dhead>
    <detailList :list="list"></detailList>
</div>
</template>
<script>
import banner from'./detail/banner'
import dhead from './detail/head'
import detailList from'./detail/detailList'
import axios from 'axios'
export default {
    components:{
        banner,
        dhead,
        detailList
    },
    data(){
          return{
              sightName:'',
              bannerImg:'',
              gallaryImgs:[],
              list:[],
              }
      },
      methods:{
        getDeatilInfo(){
          axios.get('/api/detail.json?id='+ this.$route.params.id)
          .then(this.getDeatilInfosuc)
        },
        getDeatilInfosuc(res){
          console.log(res)
          res = res.data
          if(res.ret && res.data){
            const data = res.data
            this.sightName = data.sightName
            this.bannerImg= data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.list = data.categoryList
          }
        }
      },
      mounted(){
        this.getDeatilInfo()
      }
    
}
</script>
<style lang="stylus" scoped>
 
</style>