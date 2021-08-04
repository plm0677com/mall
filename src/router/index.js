import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

const Home = ()=>import('views/home/Home')
const Channel = ()=>import('views/channel/Channel')
const Cart = ()=>import('views/cart/Cart')
const Profile = ()=>import('views/profile/Profile')
const Detail = ()=>import('views/detail/Detail')

const router = new VueRouter({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home,
      children:[

      ]
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
    },
    {
      path: '/detail',
      component: Detail
    }

  ],
  mode: 'history'
})

export default router
