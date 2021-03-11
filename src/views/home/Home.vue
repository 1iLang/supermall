<template>
  <div id="home">
    <nav-bar class="nav-set"><div slot="center">购物街</div></nav-bar>
    <home-swiper class="nav-top" :banners="banners"/>
    <home-recommend :recommends="recommends"/>
    <home-feature/>
    <tab-control :titles="['流行','新款','精选']"/>
  </div>
</template>

<script>
//公共组件
import NavBar from 'components/common/navbar/NavBar'

//home子组件
import HomeSwiper from './childComps/homeSwiper'
import HomeRecommend from './childComps/homeRecommend'
import HomeFeature from './childComps/homelist'
import TabControl from './childComps/tabControl'

//数据和方法组件
import {getHomeMultiData,getHomeGoods} from 'network/home.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
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

    //请求商品数据
    getHomeGoods().then(res => {
      console.log(res)
    })
  } 
}
</script>

<style scoped>
  .nav-set {
    color: #fff;
    background: var(--color-tint);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9;
  }
  .nav-top {
    margin-top: 44px;
  }
</style>
