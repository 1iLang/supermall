<template>
<div>
  <h3 class="tab-control">
    <div v-for="(item,index) in titles" :key="index">
      <span @click="tabClick(index)" :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </h3>

  <ul>
    <li></li>
  </ul>
</div>  
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles:Array
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
  },
  methods: {
    tabClick(i) {
      this.currentIndex = i;
    },
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  background: #fff;
  position: sticky;
  top: 44px;
}
.tab-control>div {
  flex: 1;
}
.tab-control .active {
  color: var(--color-high-text);
  padding: 5px; 
  border-bottom: solid 3px var(--color-high-text);
}
</style>
