	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import paotuidingdan from '@/views/paotuidingdan/list'
	import shensulanmu from '@/views/shensulanmu/list'
	import shangpinxinxi from '@/views/shangpinxinxi/list'
	import storeup from '@/views/storeup/list'
	import shangjia from '@/views/shangjia/list'
	import dingdanwancheng from '@/views/dingdanwancheng/list'
	import cart from '@/views/cart/list'
	import yonghu from '@/views/yonghu/list'
	import discussshangpinxinxi from '@/views/discussshangpinxinxi/list'
	import orders from '@/views/orders/list'
	import config from '@/views/config/list'
	import shangpinleixing from '@/views/shangpinleixing/list'
	import paotuijiedan from '@/views/paotuijiedan/list'
	import shangjiaRegister from '@/views/shangjia/register'
	import shangjiaCenter from '@/views/shangjia/center'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/shangjiaCenter',
			name: '商家个人中心',
			component: shangjiaCenter
		}
		,{
			path: '/news',
			name: '商品资讯',
			component: news
		}
		,{
			path: '/paotuidingdan',
			name: '跑腿订单',
			component: paotuidingdan
		}
		,{
			path: '/shensulanmu',
			name: '申诉栏目',
			component: shensulanmu
		}
		,{
			path: '/shangpinxinxi',
			name: '商品信息',
			component: shangpinxinxi
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/shangjia',
			name: '商家',
			component: shangjia
		}
		,{
			path: '/dingdanwancheng',
			name: '订单完成',
			component: dingdanwancheng
		}
		,{
			path: '/cart',
			name: '购物车',
			component: cart
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/discussshangpinxinxi',
			name: '商品信息评论',
			component: discussshangpinxinxi
		}
		,{
			path: '/orders',
			name: '订单管理',
			component: orders
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/shangpinleixing',
			name: '商品类型',
			component: shangpinleixing
		}
		,{
			path: '/paotuijiedan',
			name: '跑腿接单',
			component: paotuijiedan
		}
		]
	},
	{
		path: '/shangjiaRegister',
		name: '商家注册',
		component: shangjiaRegister
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
