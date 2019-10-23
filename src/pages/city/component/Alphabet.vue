<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name:'CityAlphabet'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .list
    position relative
    top  3rem
    right -7.2rem
    bottom 0
    line-height .4rem
    font-size .3rem
    .item
      color  $bgColor
</style>