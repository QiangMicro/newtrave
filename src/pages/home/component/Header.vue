<template>
  <div>
    <div class="header">
      <div class="header-left">
        <span class="iconfont icon-return">&#xe658;</span>
      </div>
      <div class="header-input">
        <span class="iconfont icon-search">&#xe617;</span>
        输入城市/景点/游玩主题
      </div>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont icon-list">&#xe688;</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Header',
  props:{
    city:String
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styl/varibles.styl';
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #ffffff
    .header-left 
      width .64rem
      float left 
      .icon-return
        text-align center
        font-size .4rem
        margin-left .1rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      background #ffffff
      border-radius .1rem
      color #cccccc
      .icon-search
        margin-left .1rem
    .header-right
      width 1.24rem
      float right 
      text-align center
</style>