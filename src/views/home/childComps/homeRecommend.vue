<template>
  <ul id="recommend">
    <li v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HomeRec',
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      } 
    }
  },
  components: {
  },
}
</script>

<style scoped>
#recommend {
  width: 100%;
  display: flex; 
  font-size: 12px;
  padding: 10px 0 10px;
  border-bottom: solid 10px #eee;  
}
#recommend > li {
  flex: 1;
  text-align: center;
}
#recommend > li > a {
  overflow: hidden; display: block;
}
#recommend img  {
  width: 70px; height: 70px; margin-bottom: 10px;
}
</style>
