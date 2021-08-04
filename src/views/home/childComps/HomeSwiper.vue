<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="load">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: "HomeSwiper",
  props:{
    banners:{
      // type: Object,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods:{
    load() {
      if(!this.isLoad){
        this.$emit('swiperLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>
