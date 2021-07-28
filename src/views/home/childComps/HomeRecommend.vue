<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends:{
      // type: Object,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .home-recommend{
    /*height: 10vh;*/
    display: flex;
    width: 100vw;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .home-recommend-item{
    flex: 1;
  }
  .home-recommend-item img{
    height: 60px;
    width: 60px;
  }
  .home-recommend-item div{
    margin-top: 8px;
    color: 12px;
  }
</style>
