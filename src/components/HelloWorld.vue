<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>我是H2</h2>
    <!--把子组件当作自定义元素使用-->
    <child v-bind:num="n" v-bind:num2="s" ></child>
    <p>parent:{{ n }}</p>
  </div>
</template>


<script>
  //	导入组件
	import child from './child.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
    	n:10,
    	s:"我是父组件中的属性值",
      msg: 'Welcome to Your Vue.js App！ test'
    }
  },
  //局部注册组件
  components:{
  	child
  }
}
</script>

<!-- scoped的意思是这里的样式只对当前页面有效不会影响其他页面，-->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
