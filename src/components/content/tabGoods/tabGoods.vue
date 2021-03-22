<template>
<div class="tabGoods">
  <tab-control :titles="['流行', '新款', '精选']"/>
  <tab-gs-list v-bind="$attrs"/>
</div>  
</template>

<script>
import TabGsList from './tabGsList'
import TabControl from './tabControl'
export default {
  name: "TabGoods",
  components: {
    TabGsList,
    TabControl
  },

}
</script>

<style scoped>
</style>
