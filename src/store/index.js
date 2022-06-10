import Vue from 'vue'
import Vuex from 'vuex'
// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {//修改状态只能在mutations里面
    counter: 100,
    students: [
      {name:'lilang',age:'29'},
      {name:'bajie',age:'18'},
      {name:'wukong',age:'22'},
    ],
    info:{name:'lilang',age:'29'}
  },
  mutations: {
    //方法
    increment(state) {//增加
      state.counter++
    },
    decrement(state) {//减少
      state.counter--
    },
    incrementCount(state,payload) {//加不固定值
      state.counter += payload
     // state.counter += payload.count //对象的方式
    },
    addStudents(state,stu) {
      console.log(stu);
      state.students.push(stu);
      console.log(state.students)
    },
    updateInfo(state) {
      state.info.name = 'kobe';
      // setTimeout(() => {//不能在mutation里面进行异步操作
      //   state.info.name = 'kobe';
      //   console.log(state.info.name)
      // },1000)
    }
  },
  actions: {//异步操作，经过这里执行
    aUpdateInfo(context) {
      setTimeout(() => {
        context.commit('updateInfo')
      },1000)
    }
  },
  getters: {
    bigst(state) {
      return state.students.filter(s => s.age > 20)
    }
  },
  modules: {}
})
export default store
