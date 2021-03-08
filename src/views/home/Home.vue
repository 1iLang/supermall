<template>
  <div id="home">
    <nav-bar class="nav-set"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultiData} from 'network/home.js'
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    //请求多个数据
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  } 
}
</script>

<style scoped>
  .nav-set{
    color: #fff;
    background: var(--color-tint);
  }
</style>
