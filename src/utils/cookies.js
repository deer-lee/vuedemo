import Cookie from 'js-cookie'
import TokenInfoKeys from './tokenInfoKeys'
export default {
  tokenInfoKeys: TokenInfoKeys.getEnv(),
  domain: {domain: 'xxx.com'},
  set (key, val) {
    if (this.tokenInfoKeys.dev) {
      Cookie.set(this.tokenInfoKeys[key], val)
      return
    }
    Cookie.set(this.tokenInfoKeys[key], val, this.domain)
  },

  get (key, noParse) {
    if (this.tokenInfoKeys.dev) {
      if (!Cookie.get(this.tokenInfoKeys[key])) return
      return noParse ? Cookie.get(this.tokenInfoKeys[key]) : JSON.parse(Cookie.get(this.tokenInfoKeys[key]))
    }
    if (!Cookie.get(this.tokenInfoKeys[key], this.domain)) return
    return noParse ? Cookie.get(this.tokenInfoKeys[key], this.domain) : JSON.parse(Cookie.get(this.tokenInfoKeys[key], this.domain))
  },

  remove (key) {
    if (this.tokenInfoKeys.dev) {
      Cookie.remove(this.tokenInfoKeys[key])
    }
    Cookie.remove(this.tokenInfoKeys[key], this.domain)
  }
}
