<template>
  <ul class="list" >
      <li class="item" 
      v-for="item of letters"
      :key="item"
      :ref="item"  
      @click="handleClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
 name:"letter",
 props:{
   city:Object,
   
 },
 data (){
   return {
     touchStatus:false,
     timer:null,
     startY:0
   }
 },
  updated(){
   this.startY = this.$refs['A'][0].offsetTop
 },
 methods:{
   handleClick(fe) {
     this.$emit("change",fe.target.innerText)

   },
   handleTouchStart() {
     this.touchStatus = true

   },
   handleTouchMove(e) {
     if(this.touchStatus){
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
      const touchY = e.touches[0].clientY-84
      //  console.log(touchY)
      const index =Math.floor((touchY - this.startY) / 20) 
      // console.log(index)
      if(index >= 0 && index <= this.letters.length){
        this.$emit('change',this.letters[index])
      }
      }, 5);
       }

   },
   handleTouchEnd() {
     this.touchStatus = false
  
   }
   
 },
 computed: {
   letters (){
     const letters = []
     for(let i in this.city){
       letters.push(i)
     }
     return letters
   }
 }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/var.styl'
 .list
  position: absolute
  top:1.7rem
  right :0
  bottom :0
  width :.4rem
  display :flex
  flex-direction :column
  justify-content :center
  .item
   text-align :center
   line-height  :.4rem
   color :$bgColor
</style>