/**
 * Created by lovering on 2017/11/14.
 */
export default {
  getEnv () {
    let tokenKey = null
    let infoKey = null
    let isDev = false
    switch (process.env.NODE_ENV) {
      case 'development':
        tokenKey = 'WMS_TOKEN_DEV'
        infoKey = 'WMS_USER_INFO_DEV'
        isDev = true
        break
      case 'test':
        tokenKey = 'WMS_TOKEN_TEST'
        infoKey = 'WMS_USER_INFO_TEST'
        break
      case 'beta':
        tokenKey = 'WMS_TOKEN_BETA'
        infoKey = 'WMS_USER_INFO_BETA'
        break
      case 'production':
        tokenKey = 'WMS_TOKEN'
        infoKey = 'WMS_USER_INFO'
        break
      default:
        break
    };

    return {
      'token': tokenKey,
      'info': infoKey,
      'dev': isDev
    }
  }
}
