<template>
<div >
    <div class="title">热销推荐</div>
    <ul>
        <router-link 
        :to="'/detail/'+item.id"
        class="item border-bottom " 
        v-for="item of list" 
        :key="item.id"
        tag="li">
            <img :src="item.imgUrl" class="rec-img">
            <div class="img-inf">
                <p class="inf-title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
                <button class="button">查看详情</button>

            </div>

        </router-link>
        
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
                    imgUrl:"http://img1.qunarzz.com/sight/p0/201403/11/157a60a6859cb12d8a88c81113055c93.jpg_200x200_3563fa0d.jpg",
                    title : "联邦空中花园",
                    desc:"石家庄空中花园全称——空中四季海滨生态公园，是联邦房地产集团投资3亿打造的真正意义上的空中花园，面积近30,000平方米，"
                },
                {
                    id:"002",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/201403/11/157a60a6859cb12d8a88c81113055c93.jpg_200x200_3563fa0d.jpg",
                    title : "联邦空中花园",
                    desc:"石家庄空中花园全称——空中四季海滨生态公园，是联邦房地产集团投资3亿打造的真正意义上的空中花园，面积近30,000平方米，"
                },
                {
                    id:"003",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/201403/11/157a60a6859cb12d8a88c81113055c93.jpg_200x200_3563fa0d.jpg",
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
 margin-top :.2rem
.item
 display :flex
 height :1.9rem
 .rec-img
  height :1.7rem
  width :1.7rem
  padding :.1rem
 .img-inf
  float left
  overflow hidden
  padding :.1rem
  .inf-title
   font-size :.32rem
   line-height :.54rem
   ellipsis()
  .desc
   flex:1
   white-space nowrap
   color #ccc
   line-height .4rem
   height .4rem
   ellipsis()
  .button
   background-color orange
   color #fff
   padding:0  .2rem
   border-radius:0.06rem
   margin-top .16rem
   line-height .44rem


</style>