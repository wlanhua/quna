<template>
<div>
  <chead></chead>
  <search :city="cities"></search>
  <list :city="cities" :hot="hotCity" :letter="letter"></list>
  <letter :city="cities" @change="letterChange"></letter>
</div>
</template>

<script>
import chead from './city/cityhead'
import search from './city/search'
import list from './city/list'
import letter from './city/letter'
import axios from 'axios'
export default {
    name:"city",
    components: {
        chead,
        search,
        list,
        letter
    },
    data (){
      return{
        cities:{},
        hotCity:[],
        letter:''
      }
    },
    methods:{
      getCityInfo() {
        axios.get('/api/city.json')
        .then(this.getCityInfoSuc)
      },
      getCityInfoSuc(res){
        res = res.data
        if(res.ret && res.data){
          const data = res.data
          this.cities= data.cities
          this.hotCity = data.hotCities
        }

      },
      letterChange(letter) {
        this.letter = letter
        // console.log(letter)

      }

    },
    mounted (){
      this.getCityInfo()
    }

}
</script>

<style>

</style>