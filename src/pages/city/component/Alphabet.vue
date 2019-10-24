<template>
  <ul class="list" >
    <li class="item" v-for='(item,key) of cities' :key='key'>{{key}}</li>
  </ul>
</template>
<script>
export default {
  props:{
    cities:Object
  },
  name:'CityAlphabet'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .list
    width .5rem
    background red
    position relative
    right -7.58rem
    // top 1.58rem
    // right -7.2rem
    // bottom 0
    line-height .4rem
    font-size .3rem
    .item
      color  $bgColor
</style>