import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login' //登录
import Home from '@/components/home' //主页
import StoreMsg from '@/components/storeMsg' //门店信息
import ImageFileUpload from '@/components/imageFileUpload' //影像资料1
import ImageFileUpload2 from '@/components/imageFileUpload2' //影像资料2
import LoanAgreement from '@/components/loanAgreement' //借款服务协议确认
import LoanContract from '@/components/loanContract' //借款服务协议确认

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/login', //登录
			name: 'login',
			component: Login
		},
		{
			path: '/',
			component: Home,
			name: '终端机借款进件主页',
			children: [{
					path: '/storeMsg',
					component: StoreMsg,
					name: '门店信息',
					hidden: true
				},
				{
					path: '/imageFileUpload/:currentOrder',
					component: ImageFileUpload,
					name: '影像资料上传',
					hidden: false
				},
				{
					path: '/imageFileUpload2/:currentOrder',
					component: ImageFileUpload2,
					name: '影像资料上传2',
					hidden: false
				},
				{
					path: '/loanAgreement/:currentOrder',
					component: LoanAgreement,
					name: '借款服务协议确认',
					hidden: false
				},
				{
					path: '/loanContract/:currentOrder',
					component: LoanContract,
					name: '借款合同确认',
					hidden: false
				}

			]
		},
	]
})