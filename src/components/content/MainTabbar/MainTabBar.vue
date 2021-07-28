<template>
  <div>
    <tab-bar>
      <tab-bar-item v-for="(item,index) in tabInfo" :key="index" :path="item.path">
        <img slot="tab-icon" :src="item.icon" alt="">
        <img slot="tab-icon-light" :src="item.iconLight" alt="">
        <div slot="tab-text">{{ item.name }}</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      tabInfo: [
        {
          name: '首页',
          path:'/home',
          icon: require('assets/img/tabbar/home.png'),
          iconLight: require('assets/img/tabbar/homelight.png')
        },
        {
          name: '分类',
          path:'/channel',
          icon: require('assets/img/tabbar/channel.png'),
          iconLight: require('assets/img/tabbar/channellight.png')
        },
        {
          name: '购物车',
          path:'/cart',
          icon: require('assets/img/tabbar/cart.png'),
          iconLight: require('assets/img/tabbar/cartlight.png')
        },
        {
          name: '我的',
          path:'/profile',
          icon: require('assets/img/tabbar/profile.png'),
          iconLight: require('assets/img/tabbar/profilelight.png')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
