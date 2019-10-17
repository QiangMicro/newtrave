<template>
  <div>
    <div class="title">热销推荐</div>
    <ul >
      <li class="item border-bottom" >
        <img class="item-img" src="https://imgs.qunarzz.com/sight/p0/1506/e8/e87354c876fd6c38.water.jpg_200x200_9c11d922.jpg" alt="北宫国家森林公园" >
        <div class="item-info">
          <p class="item-title">北宫国家森林公园</p>
          <p class="item-desc">北宫国家森林公园是丘陵型自然风景区。</p>
          <button  class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'HomeRecommend'
}
</script>
<style lang="stylus" scoped>
  .title
    margin-top .2rem
    line-height .8rem
    background #eeeeee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      .item-title
        line-height  .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color #cccccc
      .item-button
        margin-top .2rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #ffffff
</style>