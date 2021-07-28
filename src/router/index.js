import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

const Home = ()=>import('views/home/Home')
const Channel = ()=>import('views/channel/Channel')
const Cart = ()=>import('views/cart/Cart')
const Profile = ()=>import('views/profile/Profile')

const router = new VueRouter({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/channel',
      component: Channel
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})

export default router
