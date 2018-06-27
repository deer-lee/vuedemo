/**
 * Created by lovering on 2017/11/15.
 */
// import Vue from 'vue';
import axios from 'axios'
import Cookies from './cookies'
import LogOut from './logout'
import jsCookie from 'js-cookie'
import TokenInfoKeys from './tokenInfoKeys'
export default {
  tokenInfoKeys: TokenInfoKeys.getEnv(),
  isOut: false,
  outTime: 120 * 60 * 1000,
  chengTime: 80 * 60 * 1000,
  set (val) {
    this.setTokenTime()
    Cookies.set('token', val)
  },
  get () {
    let token = Cookies.get('token', true)
    let date = (new Date()).getTime() - this.getTokenTime()
    if (!this.isOut && token && date > this.outTime) {
      this.isOut = true
      LogOut(false)
    }
    let toVoid = token && (date > this.chengTime)
    toVoid && this.up('Bearer ' + token)
    return 'Bearer ' + token
  },
  remove () {
    this.remTokenTime()
    Cookies.remove('token')
  },
  up (token) {
    axios({
      headers: {'Authorization': token},
      method: 'post',
      url: 'http://paas-test.xianyiscm.com/page/uam/user/common/getTokenAgain'
    }).then((res) => {
      this.set(res.data.result)
    }).catch((err) => {
      console.log(err)
    })
  },
  setTokenTime () {
    let date = (new Date()).getTime()
    if (this.tokenInfoKeys.dev) {
      jsCookie.set(this.tokenInfoKeys['token'] + '_KEY', date)
      return
    }
    jsCookie.set(this.tokenInfoKeys['token'] + '_KEY', date, Cookies.domain)
  },
  getTokenTime () {
    if (this.tokenInfoKeys.dev) {
      return jsCookie.get(this.tokenInfoKeys['token'] + '_KEY')
    }
    return jsCookie.get(this.tokenInfoKeys['token'] + '_KEY', Cookies.domain)
  },
  remTokenTime () {
    if (this.tokenInfoKeys.dev) {
      jsCookie.remove(this.tokenInfoKeys['token'] + '_KEY')
      return
    }
    jsCookie.remove(this.tokenInfoKeys['token'] + '_KEY', Cookies.domain)
  }
}
