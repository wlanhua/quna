<template>
    <div>
        <div v-for="(item,index) of list" :key="index">
        <div class="title border-bottom" >
            <span class="mp-ticketype-ticket"></span>{{item.title}}
        </div>
          
        <div v-if="item.children">
            <detailList :list="item.children" class="item" ></detailList>
        </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name:"detailList",
     props:{
       list:Array
     }
  }
  </script>
  
  <style lang="stylus" scoped>
  .title
    height :.8rem
    line-height :.8rem
    padding :0 .6rem
    .mp-ticketype-ticket 
      display: inline-block;
      position: absolute;
      width: .36rem;
      height: .36rem;
      top: .26rem;
      left: .2rem;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
  .item
     padding :0 .2rem
  
  
  </style>