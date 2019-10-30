<template>
<div >
    <div class="title">周末去哪</div>
    <ul>
        <li class="item border-bottom " v-for="item of list" :key="item.id">
            <div class="rec-img-wrap">
            <img :src="item.imgUrl" class="rec-img">
            </div>
            <div class="img-inf">
                <p class="inf-title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
            </div>

        </li>
        
    </ul>
</div>
</template>
<script>
export default {
    name:"rec",
    props:{
        list:Array
    },
    data (){
        return {
            itemList:[
                {
                    id:"001",
                    imgUrl:"http://img1.qunarzz.com/sight/source/1812/b5/102e9610089aa5.jpg_r_640x214_80fe0bd7.jpg",
                    title : "联邦空中花园",
                    desc:"石家庄空中花园全称——空中四季海滨生态公园，是联邦房地产集团投资3亿打造的真正意义上的空中花园，面积近30,000平方米，"
                },
                {
                    id:"002",
                    imgUrl:"http://img1.qunarzz.com/sight/source/1812/b5/102e9610089aa5.jpg_r_640x214_80fe0bd7.jpg",
                    title : "联邦空中花园",
                    desc:"石家庄空中花园全称——空中四季海滨生态公园，是联邦房地产集团投资3亿打造的真正意义上的空中花园，面积近30,000平方米，"
                },
                {
                    id:"003",
                    imgUrl:"http://img1.qunarzz.com/sight/source/1812/b5/102e9610089aa5.jpg_r_640x214_80fe0bd7.jpg",
                    title : "联邦空中花园",
                    desc:"石家庄空中花园全称——空中四季海滨生态公园，是联邦房地产集团投资3亿打造的真正意义上的空中花园，面积近30,000平方米，"
                },
            ]
        }

    }
    
}
</script>
<style scoped lang="stylus">
@import '~@/assets/mixin.styl'
.title
 line-height :.6rem
 background:#ccc
 text-indent :.2rem
.rec-img-wrap
 height :0
 overflow: hidden
 padding-bottom:33.9%
 .rec-img
  width :100%
.img-inf
  overflow hidden
  padding :.1rem
 .inf-title
   font-size :.32rem
   line-height :.54rem
   ellipsis()
 .desc
   white-space nowrap
   color #ccc
   line-height .4rem
   height .4rem
   ellipsis()
</style>