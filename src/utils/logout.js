import Vue from 'vue'
import Cookies from './cookies'
import Token from './token'
export default function logOut (isRequest = true, code) {
  if (isRequest) {
    Vue.prototype.$ajax.post('/page/login/logout').then((res) => {
      clearAndOut(code)
    }).catch((err) => {
      console.log(err)
      clearAndOut(code)
    })
  } else {
    clearAndOut(code)
  }
};

function clearAndOut (val) {
  if (val !== '' && val !== undefined && val !== null) {
    window.location.href = window.location.origin + '/login?code=' + val + ''
  } else {
    window.location.href = window.location.origin + '/login'
  }
  Cookies.remove('info')
  Token.remove()
}
