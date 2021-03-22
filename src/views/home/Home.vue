<template>
  <div id="home">
    <nav-bar class="nav-set"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-con" ref="tabCon" v-show="isFixed" :titles="['流行', '新款', '精选']"/>
    <scroll class="home-scroll" ref="hScroll" @beScroll="beScroll" @beUp="beUp" :probeType="3" :pullUpLoad="true">
      <home-swiper :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-goods :goods="goods[currentType]" ref="hGoods"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBT"/>
  </div>
</template>

<script>
//公共组件
import NavBar from "components/common/navbar/NavBar";
import TabGoods from "components/content/tabGoods/tabGoods";
import Scroll from "components/common/scroll/scroll"
import BackTop from "components/content/backTop/backTop"

//home子组件
import HomeSwiper from "./childComps/homeSwiper";
import HomeRecommend from "./childComps/homeRecommend";
import HomeFeature from "./childComps/homelist";
import TabControl from 'components/content/tabGoods/tabControl'


//数据和方法组件
import { getHomeMultiData, getHomeGoods } from "network/home.js";
import { debounce } from "common/utils"

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabGoods,
    TabControl,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {page:0,list:[]},
        new: {page:0,list:[]},
        sell: {page:0,list:[]},
      },
      currentType: 'pop',
      isShowBT: false,
      isFixed: false
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultiD();

    //请求商品数据
    this.getHomeGs(this.currentType);
    // this.getHomeGs(1);
    // this.getHomeGs(2);
  },
  mounted() {
    //监听tabControl切换数据 
    this.$bus.$on('getGsType',(i) => {
      this.getGsType(i);
      this.$refs.tabCon.currentIndex = i
      this.$refs.hGoods.$children[0].currentIndex = i
    })
    //监听图片加载完成
    
    const refresh = debounce(this.$refs.hScroll.refresh,500)
    this.$bus.$on('imgLoad',() => {
      refresh()
      //this.$refs.hScroll && this.$refs.hScroll.refresh()
    })
  },
  beforeDestroy() {
    this.$bus.$off('imgLoad')//组件销毁之前解绑$bus全局自定义事件，避免重复监听
  },
  methods: {
    getHomeMultiD() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGsType(i){
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
      this.goods[type].list.length > 0 || this.getHomeGs(type)
    },
    getHomeGs(type) {
      let page = this.goods[type].page + 1;      
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.result.wall.docs);
        this.goods[type].page += 1;
      });
    },
    backTop() {
      this.$refs.hScroll.scrollTo(0,0)
    },
    beScroll(p){//接收滚动实时位置
      this.isShowBT = (-p.y) > 1500;
      this.isFixed = (-p.y) >= this.$refs.hGoods.$el.offsetTop
    },
    beUp() {
      this.getHomeGs(this.currentType);
    }
  },
};
</script>

<style scoped>
.nav-set {
  color: #fff;
  background: var(--color-tint);
  width: 100%;
}

.tab-con {position: relative;z-index: 1;}
.home-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
