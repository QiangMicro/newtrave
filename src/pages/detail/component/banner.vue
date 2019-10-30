<template>
  <div class="banner">
    <img 
      class="banner-img"
      src='//img1.qunarzz.com/sight/p0/1910/6f/6f3fa8d8f8e14b66a3.water.jpg_600x330_c2bbb749.jpg' 
      alt="欢乐谷"
    >
    <div class="banner-info">
      <div class="banner-title">深圳欢乐谷(AAAAA景区)</div>
       <div class="banner-number"><span class="iconfont banner-icon">&#xe691;</span>51</div>
>>>>>>> origin/detail-banner
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
    position relative
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
      color #ffffff
      padding 0 .2rem
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .2rem
        padding 0 .2rem
        height .32rem
        line-height .32rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .1rem
          margin 0 .1rem 0 0
</style>