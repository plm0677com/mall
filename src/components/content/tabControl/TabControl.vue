<template>
  <div class="tab-control">
    <div
      :class="{active:currIndex===index}"
      v-for="(item,index) in tabs"
      @click="tabClick(index)"><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currIndex: 0
    }
  },
  props:{
    tabs:{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods:{
    tabClick(index) {
      this.currIndex = index
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .tab-control div{
    flex: 1;
  }
  .tab-control span{
    padding: 5px;
  }
  .active{
    color: var(--color-higt-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-higt-text);
  }
</style>
