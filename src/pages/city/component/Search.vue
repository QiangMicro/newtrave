<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name:"CitySearch"
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      height .6rem
      width 100%
      line-height .6rem
      text-align center
      border-radius .06rem
      color #666666
      box-sizing border-box
      padding 0 .1rem
</style>