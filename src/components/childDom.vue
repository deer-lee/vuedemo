<template>
   <div @click="post">{{value}}</div>
</template>

<script>
export default {
  props: {
    value: {}
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    post () {
      this.$emit('getChildValue', '子组件的值')
    }
  }
}
</script>

<style scoped>

</style>
