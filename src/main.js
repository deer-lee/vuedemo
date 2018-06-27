// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import scss from './assets/style/index.scss'
import { Button, Select } from 'element-ui'

let components = [
  Button,
  Select
]
components.forEach((component) => {
  Vue.use(component)
})
console.log(scss)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
