<template>
  <h3 class="tab-control">
    <div v-for="(item,index) in titles" :key="index">
      <span @click="tabClick(index)" :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </h3>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    titles:Array,
  },
  data() {
    return {
      currentIndex: 0,
      isFixed: false
    }
  },
  methods: {
    tabClick(i) {
      this.currentIndex = i;
      // this.$parent.$parent.$parent.getGsType(i);
      // const t0 = performance.now();
      this.$bus.$emit('getGsType',i)
      // const t1 = performance.now();
      // console.log(t1 - t0, 'ms');

    },
  }
}
</script>

<style scoped>
.tab-control {
  width: 100%;
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  background: #fff;
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
