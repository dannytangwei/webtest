<!--这个文件就是一个组件，此组件会被main.js导入使用-->
<template>
  <div id="app">
    <!--一级路由的渲染载体-->
    <router-view/>
  </div>
</template>

<script>
//导出默认, 有且只有一个默认（es6）
export default {
  name: 'App'
}
</script>

<style>
  .left{
    width:20%;
    border: 1px solid gray;
    float: left;
  }
</style>
