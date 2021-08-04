<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "@/components/content/MainTabbar/MainTabBar";
  import {HomeMultiData} from "@/network/home";

  export default {
    name: 'App',
    components: {
      MainTabBar
    },
    methods:{

    }
  }
</script>

<style>
@import './assets/css/base.css';
</style>
