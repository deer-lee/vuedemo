// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {getProjectLink} from './utils/env'
import LogOut from './utils/logout'
import './mock/mock'

import scss from './assets/style/index.scss'
import {
  Input,
  Button,
  Select,
  Table,
  TableColumn
} from 'element-ui'

let components = [
  Input,
  Button,
  Select,
  Table,
  TableColumn
]
components.forEach((component) => {
  Vue.use(component)
})
console.log(scss)

// 路由跳转前拦截
router.beforeEach((to, from, next) => {
  if (to.meta.intercept) {
    next({name: 'notFind'})
  } else {
    next()
  }
  document.title = to.meta.title
})

// 判断当前环境
let projectLink = getProjectLink()
var instance = axios.create({
  timeout: 10000,
  baseURL: projectLink.baseUrl
})

instance.interceptors.request.use(function (req) {
  console.log('req', req)
  req.url = projectLink.baseUrl + req.url
  // req.headers.LoginKey = 'xxx'
  // req.headers.Authorization = 'token'
  return req
})

instance.interceptors.response.use(function (res) {
  if (res.status === 200) {
    if (res.data.code === 100009 || res.data.code === 100010 || res.data.code === 100006 || res.data.code === 403) {
      // TOKEN解析失败 || 操作频率过快, 您的帐号已被冻结 || 会话超时,请刷新页面重试 || jwt验签校验
      LogOut(true, res.data.code)
    } else if (res.data.code === 110000) {
      LogOut(false, res.data.code)
    }
    return res.data
  } else {
    return res
  }
})

Vue.config.productionTip = false

Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
