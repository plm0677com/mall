<template>
  <div class="bottom-control">
    <div class="left">
      <a href="">
        <img src="" alt="">
        <span>客服</span>
      </a>
      <a href="">
        <img src="" alt="">
        <span>店铺</span>
      </a>
      <a href="">
        <img src="" alt="">
        <span>收藏</span>
      </a>
    </div>
    <div class="center" @click="cartClick">
      购物车
    </div>
    <div class="right">
      购买
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "BottomControl",
  props:{
    cartInfo:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // vuex 映射
    ...mapActions([
      'getCartInfo'
    ]),
    // 业务逻辑
    cartClick() {
      const cartInfo = this.cartInfo
      this.getCartInfo(cartInfo).then(res=>{
        this.$toast.show(res,2000)
      })
    }
  }
}
</script>

<style scoped>
  .bottom-control{
    background-color: #ffffff;
    display: flex;
    text-align: center;
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    box-shadow: 0 -1px 5px rgba(0,0,0,0.1);
    line-height: 49px;
    font-size: 18px;

  }
  .left{
    flex: 3;
    display: flex;
  }
  .left a{
    flex: 1;
  }
  .center{
    flex: 1;
    background-color: #ffe817;
    color: #000;
  }
  .right{
    flex: 1;
    background-color: #ff5777;
    color: #fff;
  }

</style>
