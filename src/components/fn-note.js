import Note from './note'

export default {
  extends: Note,
  computed: {
    style () {
      return {
        position: 'fixed',
        right: '500px',
        bottom: `$(this.verticalOffset + 20}px`
      }
    }
  },
  data () {
    return {
      verticalOffset: 0,
      vidible: false,
      height: 0,
      autoClose: 3000
    }
  },
  moutend () {
    this.createTimer()
  },
  methods: {
    createTimer () {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.doClose()
        }, this.autoClose)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    setHeight () {
      this.height = this.$el.offsetHeight
    }
  }
}
