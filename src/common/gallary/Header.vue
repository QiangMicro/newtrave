<template>
  <div>
    <router-link tag="div" to='/' class="header-abs">
      <span class="iconfont header-abs-back">&#xe658;</span>
    </router-link>
    <div class="header-fixed"></div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  name:'CommonHeader'
}
</script>
<style lang="stylus" scoped>
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .6rem
    height .6rem
    border-radius .25rem
    line-height .6rem
    text-align center
    background rgba(0,0,0,.2)
    .header-abs-back
      color #ffffff
      font-size .4rem
  .content
    height 50rem
</style>