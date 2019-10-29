<template>
  <div class="banner">
    <img 
      class="banner-img"
      src='//img1.qunarzz.com/sight/p0/1910/6f/6f3fa8d8f8e14b66a3.water.jpg_600x330_c2bbb749.jpg' 
      alt="欢乐谷"
    >
    <div class="banner-info">
      <div class="banner-number">51</div>
      <div class="banner-title">深圳欢乐谷(AAAAA景区)</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailBanner'
}
</script>
<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      .banner-title
        flex 1
      .banner-number
        padding 0 .4re
        height .4rem
        line-height .4rem
        border-radius .2rem
        // background:#rgba(0,0,0,.8)
</style>