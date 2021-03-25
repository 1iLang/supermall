<template>
  <div>
    <nav-bar>
      <div class="nav-left" slot="left"><img @click="goBack" src="@/assets/img/common/back.svg" alt=""></div>
      <div class="nav-content" slot="center">
        <span v-for="(item, index) in titles" :key="index"
        @click="navClick(index)" 
        :class="{'active' : index === currentIndex}">{{item}}</span>
      </div>
    </nav-bar>
    {{id}}
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import {getDetail} from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      id: null,
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  activated() {
    this.id = this.$route.params.id;
    getDetail(this.id).then(res => {
      console.log(res)
    })
  },
  methods: {
    navClick(i) {
      this.currentIndex = i
    },
    goBack() {
      this.$router.back()
    }
  }  

}
</script>

<style scoped>
.nav-left {
  text-align: center;
}
.nav-left img {
  vertical-align:middle
}
.nav-content {
  display: flex;
  font-size: 13px;

}
.nav-content > span {
  flex: 1;
  text-align: center;
}
.active {
  color: var(--color-high-text)
}
</style>
