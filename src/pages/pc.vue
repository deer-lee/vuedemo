<template>
    <div class="page-content">
        {{msg}}
      <child-com :value="text" @getChildValue="getValue"></child-com>
      <note-con :content="content" btn="x"></note-con>
    </div>
</template>

<script>
import ChildCom from '../components/childDom'
import Note from '../components/note'
export default {
  data () {
    return {
      msg: 'aa',
      text: '哈哈哈',
      content: '这是一个通知',
      inputValue: '111'
    }
  },
  components: {
    'child-com': ChildCom,
    'note-con': Note
  },
  mounted () {},
  methods: {
    getValue (val) {
      console.log(val)
      this.text = val
    }
  }
}
</script>

<style scoped>

</style>
