<template>
  <div id="app">
   <keep-alive>
    <router-view/>
   </keep-alive>
  </div>
</template>

<style lang="scss">
//keep-alive 的作用是routerview的内容被加载过一次就放入内存，下次就直接取而不是重新渲染请求文件，从而提高性能
</style>
