<template>
  <div>
    <detail-bar></detail-bar>
    <bottom-control :cart-info="cartInfo"></bottom-control>
    <toast></toast>
  </div>
</template>

<script>
import DetailBar from "@/views/detail/childComps/DetailBar";
import BottomControl from "@/views/detail/childComps/BottomControl";
import Toast from "@/components/common/toast/Toast";

import {detailData} from "@/network/detail";



export default {
  name: "Detail",
  components:{
    DetailBar,
    BottomControl,
    Toast
  },
  data() {
      return {
        iid:null,
        swiperImgs:[],
        cartInfo: {
          "cartId":null,
          "cartPic":null,
          "cartPrice":null,
          "cartTitle":null,
          "cartCount":1
        }
      }
  },
  methods: {
    getHomeDetail() {
      // 1. 获取iid
      this.iid =  this.$route.query.iid

      // 2. 请求数据
      detailData(this.iid).then(res=>{

        // 3. 获取结果
        const data = res.result;

        // 4. 获取轮播图数据

        // 5. 获取购物车信息
        this.cartInfo.cartPic = data.itemInfo.topImages[0]
        this.cartInfo.cartPrice = data.itemInfo.lowNowPrice
        this.cartInfo.cartTitle = data.itemInfo.title
        this.cartInfo.cartId = data.itemInfo.iid
      })
    }
  },
  created() {
    this.getHomeDetail()
  }
}
</script>

<style scoped>

</style>
