import Vue from 'vue'
import Router from 'vue-router'
//1.导入组件（页面）
import GoodsList from './../views/GoodsList'

Vue.use(Router)


//2. 创建 router实例,此router实例会在main.js中导入的并传递给Vue根组件
export default new Router({
	//定义路由，每个路由映射一个组件
	routes: [
		{
			//一级路由
			path: '/',
			name: 'GoodsList',
			component: GoodsList,
		},
		
	]
})