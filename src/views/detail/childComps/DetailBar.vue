<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img class="back" src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <span v-for="(item,index) in title" class="bar-item"
              :class="{active:currIndex===index}" @click="itemClick(index)">{{item}}</span>
      </div>
      <div slot="right"></div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailBar",
  components: {
    NavBar
  },
  data() {
    return {
      'title': ['商品', '参数', '评论', '推荐'],
      'currIndex': 0
    }
  },
  methods:{
    itemClick(index){
      this.currIndex = index
      console.log(index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .center{
    display: flex;
    font-size: 14px;
  }
  .bar-item{
    flex: 1;
  }
  .back{
    padding-top: 12px;
  }
  .active{
    color: #FF8198;
  }
</style>
