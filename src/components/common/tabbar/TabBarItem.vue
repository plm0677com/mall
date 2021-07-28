<template>
  <div class="tabbaritem" @click="tabViews">
    <div class="tab-icon">
      <slot name="tab-icon" v-if="!isActive"></slot>
      <slot name="tab-icon-light" v-else></slot>
    </div>
    <div :style="activeColor"><slot name="tab-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:{
      type:String
    },
    customColor:{
      type:String,
      default: '#ff5777'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeColor() {
      return this.isActive?{color:this.customColor}:{}
    }
  },
  methods: {
    tabViews() {
      if (this.$route.path != this.path){
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style scoped>
  .tabbaritem{
    flex: 1;
    font-size: var(--font-size);
    text-align: center;
  }
  .tab-icon img{
    width: 25%;
    margin-top: 5px;
  }
  .activeColor{
    color: var(--color-higt-text);
  }
</style>
