<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import ObserveDOM from '@better-scroll/observe-dom'
Bscroll.use(ObserveDOM)

export default {
  name: "scroll",
  props:{
    probeType:{
      type: Number,
      default() {
        return 0
      }
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll:null
    }
  },
  methods: {
    BScroll() {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        observeDOM:true, //动态计算content的高度
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })

      this.scroll.on('scroll', (position)=>{ //监听滚动事件
        this.$emit('scrollPosition', position)
      })

      this.scroll.on('pullingUp',()=> {  //当底部下拉距离超过阈值
        this.$emit('pullUpLoad')
      })

    },
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      console.log('----');
      this.scroll.refresh()
    }
  },
  mounted() {
    this.BScroll()
  }
}
</script>

<style scoped>
</style>
