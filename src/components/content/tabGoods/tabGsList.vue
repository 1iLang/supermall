<template>
  <ul class="tabGsList">
    <li v-for="item in $attrs.goods.list" :key="item.cparam">
      <a @click="itemDetail(item.iid)">
        <div class="Gsimg">
          <img v-lazy="item.img+'_440x587.v1cAC.40.webp'" @load="imgLoad"/>
          <span>已售{{ item.sale }}件</span>
        </div>
        <div>
          <p class="Gstitle">{{ item.title }}</p>
          <div class="Gsprice">
            <span>{{ item.price }}</span>
            <span>{{ item.cfav }}</span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TabGsList",
  data() {
    return {
      currentLength: 0 ,//当前加载图片次数
    };
  },
  components: {},
  methods: {
    imgLoad() {
      //当前路由为首页时发送事件
      // console.time('test')
      // this.$route.path.indexOf('/home') === -1 || this.$bus.$emit('imgLoad')
      // console.timeEnd('test')
      //提升性能 -- 当前@load次数等于最后接收的图片总数时 发送事件
      if(++this.currentLength === this.$attrs.goods.lastLength) {
        this.$bus.$emit('imgLoad');
        this.currentLength = 0;
      }
    },
    itemDetail(id) {
      this.$router.push('/detail/' + id)
    }
  },
  watch: {
    currentType() {
      console.log(2)
    }
  }
};
</script>

<style scoped>
.tabGsList {
  padding: 0 1%;
  margin-top: 5px;
  overflow: hidden;
}
.tabGsList li {
  width: 50%;
  padding: 0 1%;
  float: left;
  font-size: 12px;
  margin-bottom: 10px;;
}
.tabGsList li a {
  display: block;
  overflow: hidden;
}
.tabGsList li img {
  width: 100%;
}
.tabGsList .Gsimg {
  height: 220px;
  position: relative;
  overflow: hidden;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
}
.tabGsList .Gsimg span {
  position: absolute;
  left: 5px;
  bottom: 5px;
  color: #fff;
}
.tabGsList .Gstitle {
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tabGsList .Gsprice span{
  width: 50%;
  display: inline-block;
  text-align: right;
}
.tabGsList .Gsprice span:first-child{
  font-size: 16px;
  color: var(--color-high-text);
  font-weight: bold;
  text-align: left;
}
</style>
