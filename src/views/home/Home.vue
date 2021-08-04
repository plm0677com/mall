<template>
  <div class="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-show"
                 :tabs="['流行','新款','精选']"
                 @tabControl="tabControl" ref="tabContCopy" v-show="isSticky"></tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scrollPosition="scrollPosition"
            @pullUpLoad="pullUpLoad">
      <home-swiper :banners="banners" @swiperLoad="swiperLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-features></home-features>
      <tab-control class="tab-control"
                   :tabs="['流行','新款','精选']"
                   @tabControl="tabControl" ref="tabCont"></tab-control>
      <home-goods :goods="goods[tabCType].list"></home-goods>
    </scroll>
    <back-top @click.native="topClick" v-show="isShow"></back-top>
  </div>

</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/common/backTop/BackTop";

import TabControl from "@/components/content/tabControl/TabControl";
import HomeGoods from "@/components/content/homeGoods/HomeGoods";
import HomeGoodsItem from "@/components/content/homeGoods/HomeGoodsItem";

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommend from "@/views/home/childComps/HomeRecommend";
import HomeFeatures from "@/views/home/childComps/HomeFeatures";



import {HomeMultiData, HomeGoodsData} from "@/network/home";
export default {
  name: "home",
  components: {
    NavBar,
    Scroll,
    BackTop,
    TabControl,
    HomeGoods,
    HomeGoodsItem,
    HomeSwiper,
    HomeRecommend,
    HomeFeatures,
  },
  data() {
    return {
      isShow:false,
      isSticky: false,
      rPos:0,
      tabCoffset:'',
      tabCType:'pop',
      banners: '',
      recommends: '',
      goods:{
        'pop': {
          page:0,
          list:[]
        },
        'new': {
          page:0,
          list:[]
        },
        'sell': {
          page:0,
          list:[]
        }
      }
    }
  },
  methods: {
    /**
    * 业务相关
    * */
    tabControl(index){
      switch (index) {
        case 0:
          this.tabCType = 'pop'
              break
        case 1:
          this.tabCType = 'new'
              break
        case 2:
          this.tabCType = 'sell'
              break
      }
      this.$refs.tabContCopy.currIndex = index
      this.$refs.tabCont.currIndex = index
    },
    topClick() {
      this.$refs.scroll.scrollTo(0,0,300)
    },
    scrollPosition(position) {
      this.rPos = position
      this.isShow = (-position.y)> 1000
      this.isSticky = (-position.y > this.tabCoffset) ? true : false
    },
    pullUpLoad() {
      this.HomeGoodsData(this.tabCType)
      this.$refs.scroll.finishPullUp()
    },
    swiperLoad() {
      this.tabCoffset = this.$refs.tabCont.$el.offsetTop
    },
    /**
     * 网络请求相关
     * */
    HomeMultiData() {
      HomeMultiData().then(res=>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    HomeGoodsData(type) {
      let page = this.goods[type].page
      page = page + 1;
      HomeGoodsData(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
      })
      this.goods[type].page++
    },
    /**
     * 消息总线
     */
    goodsImgLoaded() {
      const re = this.debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('goodsImgLoaded',()=> {
        re()
      })
    },
    /**
     * 防抖
     * */
    debounce(func, delay) {
      let timer = null
      return function (...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    }
  },
  computed: {

  },
  created() {
    this.HomeMultiData()
    this.HomeGoodsData('pop')
    this.HomeGoodsData('new')
    this.HomeGoodsData('sell')
  },
  mounted() {
    this.goodsImgLoaded()
  }
}
</script>

<style scoped>
  .home{
    position: relative;
    height: 100vh;
  }
  .home-nav-bar{
    background-color: var(--color-higt-text);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 9;
  }
  .content{
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-show{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>
