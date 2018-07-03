import Mock from 'mockjs'
var Random = Mock.Random

Mock.setup({
  timeout: 0 - 300
})

var users = Array.from(Mock.mock({
  'array|1-10': [
    {
      'name': '@ctitle(2, 5)',
      'id|+1': 1,
      'age|1-100': 1
    }
  ]
}).array)

export default{
  data: Mock.mock('/table/list', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'foods|1-5': [{
      'id|+1': 1,
      'name': '@ctitle(2, 10)',
      'title': '@csentence(1, 50)',
      'id|0-20.0-2': 1,
      'num|0-100': 0,
      'flag': true,
      'time': '@datetime',
      'aaa|0-100.0-2': 1,
      'limit|0-50': 1,
      'address': '@county(true)',
      'color': '@color',
      'image': Random.dataImage('200x100', 'Hello Mock.js!')
    }],
    'sales|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'name': '@ctitle(2, 10)',
      'brief': '@csentence(1, 50)',
      'price|0-100.0-2': 1,
      'num|0-100': 0,
      'minusFlag': true,
      'time': '@time',
      'peisongfei|0-100.0-2': 1,
      'limit|0-100': 1
    }]
  }),

  getUser: Mock.mock('/table/user', function () {
    return users
  }),

  deleteData: Mock.mock('/table/delete', function (options) {
    let id = parseInt(options.body.split(':')[1])
    let index
    for (let i in users) {
      if (users[i].id === id) {
        index = i
        users.splice(index, 1)
        break
      }
    }
    return users
  }),
  addData: Mock.mock('/table/add', function (options) {
    console.log(options)
    users.push(JSON.parse(options.body))
    return users
  })
}
