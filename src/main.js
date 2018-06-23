// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//因为App.vue使用的是export default导出，所以import命令可以为该模块指定任意名字。
import App1 from './App'
//import router1 from './router/index.js'
//3.导入路由实例，可以简写如下：
import router1 from './router'

Vue.config.productionTip = false

/* Vue根实例 */
new Vue({
  el: '#app',
  //4.通过 router 配置参数注入路由
  router: router1,
  components: { App1 }, /* 引入局部组件App.vue */
  template: '<App1></App1>'  /* 根实例的模板，模板也可以写在HTML文件中 */
})
