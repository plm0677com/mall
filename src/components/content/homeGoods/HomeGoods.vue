<template>
  <div class="home-goods">
    <home-goods-item v-for="item in goods" :goodsItem="item"></home-goods-item>
  </div>
</template>

<script>
import HomeGoodsItem from "@/components/content/homeGoods/HomeGoodsItem";
export default {
  name: "HomeGoods",
  props:{
    goods:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{
    HomeGoodsItem
  }
}
</script>

<style scoped>
  .home-goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
