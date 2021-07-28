<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
.tabbar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background: #f0f0f0;
}
</style>
