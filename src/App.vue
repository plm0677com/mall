<template>
  <div id="app">
    <router-view></router-view>
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
    }
  }
</script>

<style>
@import './assets/css/base.css';
</style>
