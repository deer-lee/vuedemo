let NODE_ENVS = process.env.NODE_ENV
export function getProjectLink () {
  let baseUrl = null
  switch (NODE_ENVS) {
    case 'production':
      baseUrl = 'http://saas-wms-server.xianyiscm.com'
      break
    case 'beta':
      baseUrl = 'http://47.95.65.238'
      break
    case 'test':
      baseUrl = 'http://101.201.171.196'
      break
    case 'devend':
      baseUrl = 'http://sass-dev.wms.com'
      break
    default:
      baseUrl = 'http://localhost:88888'
  }
  return {
    baseUrl: baseUrl
  }
}
