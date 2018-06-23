<template>
		<div>
			<nav-header></nav-header>
			<nav-bread>
				<span>goods</span>
			</nav-bread>
			<div class="accessory-result-page accessory-page">
				<div class="container">
					<div class="filter-nav">
						<span class="sortby">Sort by:</span>
						<a href="javascript:void(0)" class="default cur">Default</a>
						<a href="javascript:void(0)" class="price">Price
							<svg class="icon icon-arrow-short">
								<use xlink:href="#icon-arrow-short"></use>
							</svg>
						</a>
						<a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
					</div>
					<div class="accessory-result">
						<!-- filter -->
						<div class="filter stopPop" id="filter">
							<dl class="filter-price">
								<dt>Price:</dt>
								<dd>
									<!-- 默认给All添加样式 -->
									<a href="javascript:void(0)" v-on:click="priseCheck='all'" v-bind:class="{cur:priseCheck=='all'}">All</a>
								</dd>
								<dd v-for="(item,index) in priseFilter" v-bind:key="item.id">
									<a href="javascript:void(0)" v-on:click="priseCheck=index" v-bind:class="{cur:priseCheck==index}"> {{item.startprise}} - {{item.endPrise }}</a>
								</dd>
							</dl>
						</div>

						<!-- search result accessories list -->
						<div class="accessory-list-wrap">
							<div class="accessory-list col-4">
								<ul>
									<li v-for="list in goodsList" v-bind:key="list.id">
										<div class="pic">
											<a href="#"><img v-bind:src="'/static/'+list.prodcutImg" alt=""></a>
										</div>
										<div class="main">
											<div class="name">{{list.productName}}</div>
											<div class="price">{{list.prodcutPrice}}</div>
											<div class="btn-area">
												<a href="javascript:;" class="btn btn--m">加入购物车</a>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav-footer></nav-footer>
		</div>
</template>

<script>
	import './../assets/css/base.css'
	import './../assets/css/checkout.css'
	import './../assets/css/product.css'
	import NavHeader from '@/components/NavHeader.vue'
	import NavFooter from '@/components/NavFooter.vue'
	import NavBread from '@/components/NavBread.vue'
	import axios from 'axios'
	export default{
		data(){
			return{
				goodsList:[],
				priseFilter:[
					{
						startprise:"0.00",
						endPrise:"500"
					},
					{
						startprise:"500",
						endPrise:"1000"
					},
					{
						startprise:"1000",
						endPrise:"2000"
					}
				],
				priseCheck: "all"
			}
		},
		components:{
			NavHeader,
			NavFooter,
			NavBread
		},
		mounted: function(){
			this.getGoodsList();
		},
		methods:{
			getGoodsList () {
				axios.get('/goods').then((result)=>{
					var res = result.data;
					// 把服务器返回json数据中的result赋值给Vue实例的data
					this.goodsList = res.result;
				})
			}
		}
	}
</script>
