<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe658;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name:'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .header
    position relative
    overflow hidden
    color #ffffff
    text-align center
    height $headerHeight
    line-height $headerHeight
    background $bgColor
    font-size .3rem
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #ffffff
</style>