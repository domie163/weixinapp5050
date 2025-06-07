import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import huiyuandengji from '@/views/modules/huiyuandengji/list'
    import yongchileixing from '@/views/modules/yongchileixing/list'
    import huiyuanchongzhi from '@/views/modules/huiyuanchongzhi/list'
    import huiyuan from '@/views/modules/huiyuan/list'
    import changguanxinxi from '@/views/modules/changguanxinxi/list'
    import yinshixinxi from '@/views/modules/yinshixinxi/list'
    import yongchiyuding from '@/views/modules/yongchiyuding/list'
    import changguanleixing from '@/views/modules/changguanleixing/list'
    import yinshileixing from '@/views/modules/yinshileixing/list'
    import yongchixinxi from '@/views/modules/yongchixinxi/list'
    import config from '@/views/modules/config/list'
    import goumaixinxi from '@/views/modules/goumaixinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/huiyuandengji',
        name: '会员等级',
        component: huiyuandengji
      }
      ,{
	path: '/yongchileixing',
        name: '泳池类型',
        component: yongchileixing
      }
      ,{
	path: '/huiyuanchongzhi',
        name: '会员充值',
        component: huiyuanchongzhi
      }
      ,{
	path: '/huiyuan',
        name: '会员',
        component: huiyuan
      }
      ,{
	path: '/changguanxinxi',
        name: '场馆信息',
        component: changguanxinxi
      }
      ,{
	path: '/yinshixinxi',
        name: '饮食信息',
        component: yinshixinxi
      }
      ,{
	path: '/yongchiyuding',
        name: '泳池预定',
        component: yongchiyuding
      }
      ,{
	path: '/changguanleixing',
        name: '场馆类型',
        component: changguanleixing
      }
      ,{
	path: '/yinshileixing',
        name: '饮食类型',
        component: yinshileixing
      }
      ,{
	path: '/yongchixinxi',
        name: '泳池信息',
        component: yongchixinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/goumaixinxi',
        name: '购买信息',
        component: goumaixinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
