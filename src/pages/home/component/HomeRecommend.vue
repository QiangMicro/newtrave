<template>
  <div>
    <div class="title">猜你推荐</div>
    <ul >
      <router-link tag="li" :to="'/detail/'+ item.id" class="item border-bottom" v-for='item of recommendList' :key="item.id"  >
        <img class="item-img" :src="item.imgUrl" :alt="item.title" >
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
        <div class="item-add">{{item.address}}</div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  props:{
    recommendList:Array
  },
  name:'HomeRecommend'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
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
      position relative
      .item-title
        line-height  .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color #cccccc
    .item-add
      display inline-block
      position absolute
      right .2rem
      bottom .1rem
      color: $addColor;
      font-size: .24rem;
      line-height: .4rem;
</style>