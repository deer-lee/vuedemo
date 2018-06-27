<template>
  <div class="page-content">
    <el-button type="primary" @click="toNextPage">啦啦啦</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toNextPage () {
      this.$router.push({name: 'HelloWorld'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
