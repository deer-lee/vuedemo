<template>
  <div class="page-content">
    <el-button type="primary" @click="toPc">pc</el-button>
    <el-button type="primary" @click="toNextPage">啦啦啦</el-button>
    <el-table :data="foodsData" style="width: 100%" border>
      <el-table-column prop="time" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="num" label="数量"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="color" label="颜色"></el-table-column>
      <el-table-column prop="image" label="image">
        <template slot-scope="scope">
          <img :src='scope.row.image' alt="">
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="salesData" style="width: 100%" border>
      <el-table-column prop="time" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="num" label="数量"></el-table-column>
    </el-table>
    <el-button type="primary" @click="toDelete">删除</el-button>
    <el-button type="primary" @click="toAdd">新增</el-button>
    <ul id="example-1">
      <li v-for="item in userArr" v-bind:key="item.id">
        {{ item.id }} / {{item.name}} / {{item.age}}
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in name" v-bind:key="item">
        {{index+1}} {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      foodsData: [],
      salesData: [],
      userArr: [],
      name: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    }
  },
  mounted () {
    this.togetUser()
    this.toNextPage()
    this.togetDemo()
  },
  methods: {
    togetDemo () {
      this.$ajax.get('/table/demo').then((res) => {
        console.log('demo', res.data)
      }).catch((err) => {
        console.log('err', err)
      })
    },
    toNextPage () {
      this.$ajax.get('/table/list').then((res) => {
        console.log(res.data)
        this.foodsData = res.data.foods
        this.salesData = res.data.sales
      }).catch((err) => {
        console.log('err', err)
      })
    },
    togetUser () {
      this.$ajax.post('/table/user', {
        id: 1
      }).then((res) => {
        this.userArr = res.data
      }).catch((err) => {
        console.log(err)
      })
    },
    toDelete () {
      this.$ajax.post('/table/delete', {
        id: 1
      }).then((res) => {
        console.log(res)
        this.userArr = res.data
      }).catch((err) => {
        console.log('err', err)
      })
    },
    toAdd () {
      this.$ajax.post('/table/add', {
        name: '哈哈哈',
        age: 12
      }).then((res) => {
        this.userArr = res.data
      }).catch((err) => {
        console.log(err)
      })
    },
    toPc () {
      this.$router.push({name: 'pc'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
