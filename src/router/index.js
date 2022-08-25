import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
// 2.1 配置路由映射关系
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category', //分类页
    component: Category
  },
  {
    path: '/cart', //购物车页
    component: Cart
  },
  {
    path: '/profile', //个人信息页
    component: Profile
  },
  {
    path: '/detail/:id', //商品详情页
    component: Detail
  },
];

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router