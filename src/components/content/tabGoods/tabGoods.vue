<template>
<div class="tabGoods">
  <tab-control :titles="titles"/>
  <tab-gs-list v-bind="$attrs"/>
</div>  
</template>

<script>
import TabGsList from './tabGsList'
import TabControl from './tabControl'
export default {
  name: "TabGoods",
  props: {
    titles:Array,
  },
  /*data() {
    return {
      currentIndex: 0
    }
  },*/
  components: {
    TabGsList,
    TabControl
  },
  /*methods: {
    tabClick(i) {
      this.currentIndex = i;
      this.$parent.getHomeGs(i);
    },
  }*/
}
</script>

<style scoped>
.tabGoods {
  position: relative;
  min-height: 300px;
}
</style>
