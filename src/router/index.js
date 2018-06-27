import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'newPage'}
    },
    {
      path: '/newPage',
      name: 'newPage',
      component: resolve => require(['../pages/index'], resolve),
      meta: {
        title: '初始页面'
      }
    },
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '初始页面',
        intercept: true
      }
    },
    {
      path: '/404',
      name: 'notFind',
      component: resolve => require(['../pages/404'], resolve),
      meta: {
        title: '404'
      }
    }
  ]
})
