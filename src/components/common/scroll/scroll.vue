<template>
  <div ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  components: {   
  },
  mounted() {
    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.scroll,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听正在滚动的位置并发送出去
    this.scroll.on('scroll',(p) => {
      this.$emit('beScroll',p)
    })
    //监听上拉事件并发送出去
    this.pullUpLoad && this.scroll.on('pullingUp',() => {
      this.$emit('beUp');
      this.scroll.finishPullUp();
    })
  },
  beforeDestroy() {
      this.scroll.destroy()
  },
  methods: {
    scrollTo(x,y,time=500) {
      this.scroll.scrollTo(x,y,time)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
