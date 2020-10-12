import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home')
const Catgory = () =>import('../views/catgory/Catgory')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
Vue.use(Router)
const routes = [
  {
    path:'',
    redirect:'/home'
  },{
    path:'/home',
    component: Home
  },{
    path:'/catgory',
    component: Catgory
  },{
    path:'/cart',
    component:Cart
  },{
    path:'/profile',
    component:Profile
  }

]
export default new Router({
  routes,
  mode:'history'
})
