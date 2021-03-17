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
  name: "name",
  data() {
    return {
      scroll: null
    }
  },
  components: {   
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.scroll,{
        click: true
      })
    }, 200) 
    // this.$nextTick(function () {
    //   this.scroll = new BScroll(this.$refs.scroll,{
    //     click: true
    //   })
    // })
  }
}
</script>

<style scoped>

</style>
