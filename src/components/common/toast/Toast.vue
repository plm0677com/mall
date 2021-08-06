<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow:false
    }
  },
  methods: {
    show(msg, delay) {
      this.isShow = true
      this.message = msg
      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      },delay)
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top:50%;
    left: 50%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    transform:translate(-50%,-50%) ;
    padding: 8px 10px;
    border-radius: 8px;
  }
</style>
