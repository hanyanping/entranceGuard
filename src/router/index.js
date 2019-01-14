import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import userinfo from  '@/views/userinfo'
import applayList from '@/views/applayList'
import applyDetail from '@/views/applyDetail'
import auditInformation from '@/views/auditInformation'
import applaypoliceList from '@/views/applaypoliceList'
Vue.use(Router)

export default new Router({
    base: '/entranceGuard/',
    // mode: 'history',
    routes: [
        {
          path: '/',
          name: 'home',
          component: home,
            meta: {
                title: '门禁管理系统'
            }
        },
        {
            path: '/userinfo',
            name: 'userinfo',
            component: userinfo,
            meta: {
                title: '填写信息'
            }
        },
        {
            path: '/applayList',
            name: 'applayList',
            component: applayList,
            meta: {
                title: '历史申请记录'
            }
        },
        {
            path: '/applyDetail',
            name: 'applyDetail',
            component: applyDetail,
            meta: {
                title: '门禁在线预约系统'
            }
        },
        {
            path: '/auditInformation',
            name: 'auditInformation',
            component: auditInformation,
            meta: {
                title: '访客信息审核'
            }
        },
        {
            path: '/applaypoliceList',
            name: 'applaypoliceList',
            component: applaypoliceList,
            meta: {
                title: '历史审核记录'
            }
        }


    ]
})
