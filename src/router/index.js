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
      component: resolve => require(['../pages/index'], resolve)
    },
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
