<template>
  <div id="home">
    <nav-bar class="nav-set"><div slot="center">购物街</div></nav-bar>
    <scroll class="home-scroll">
      <home-swiper class="nav-top" :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-goods :goods="goods[currentType]" />
    </scroll>
  </div>
</template>

<script>
//公共组件
import NavBar from "components/common/navbar/NavBar";
import TabGoods from "components/content/tabGoods/tabGoods";
import Scroll from "components/common/scroll/scroll"

//home子组件
import HomeSwiper from "./childComps/homeSwiper";
import HomeRecommend from "./childComps/homeRecommend";
import HomeFeature from "./childComps/homelist";

//数据和方法组件
import { getHomeMultiData, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabGoods,
    Scroll
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: [],
        new: [],
        sell: [],
      },
      currentType: 'pop'
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultiD();

    //请求商品数据
    this.getHomeGs(0);
    this.getHomeGs(1);
    this.getHomeGs(2);
  },
  methods: {
    getHomeMultiD() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGs(i) {
      switch (i) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      let type = this.currentType;
      this.goods[type].length > 0 ||
      getHomeGoods(type, 1).then((res) => {
        this.goods[type] = res.result.wall.docs;
      });
    },
  },
};
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
/*.nav-top {
  margin-top: 44px;
}*/
.home-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
