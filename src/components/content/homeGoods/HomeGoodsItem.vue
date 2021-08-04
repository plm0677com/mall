<template>
  <div class="goods-item">
    <a @click="goodsLink">
      <img :src="goodsItem.show.img" alt="" @load="itemLoad">
    </a>
    <div class="goods-item-title">{{goodsItem.title}}</div>
    <div class="goods-info">
      <span class="goods-price">{{goodsItem.price}}</span>
      <span class="goods-cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeGoodsItem",
  props:{
    goodsItem: {
      type: Object,
      default() {
        return []
      }
    }
  },
  methods: {
    itemLoad() {
      this.$bus.$emit('goodsImgLoaded')
    },
    goodsLink() {
      if(this.$route.path !== '/detail'){
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.goodsItem.iid
          }
        })
      }
      // if(this.$route.path !== '/home/detail'){
      //   this.$router.push('/home/detail')
      // }
      // console.log('aa');
    }
  }
}
</script>

<style scoped>
  .goods-item{
    /*flex: 1;*/
    width: 50%;
    text-align: center;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .goods-item img{
    border-radius: 10px;
    width: 100%;
    height: 225px;
    padding: 0 5px;
    margin-bottom: 5px;
  }
  .goods-item-title{
    width: 90%;
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
  }
  .goods-price{
    color: #ff8198;
  }
  .goods-info{
    display: flex;
    justify-content: space-around;
  }
</style>
