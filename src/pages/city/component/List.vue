<template>
  <div class="list" ref='wrapper'>
    <div >
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div> 
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list" >
          <div class="button-wrapper" v-for='item of hotCities' :key='item.id' >
            <div class="button">{{item.name}}</div>
          </div>         
        </div>
      </div> 
      <!-- 首写字母 -->
      <div class="area" v-for='(item,key) of cities' :key='key' >
        <div class="title border-topbottom" >{{key}}</div>
        <div class="item-list" v-for='itemHtml of item' :key='itemHtml.id'>
          <div class="item border-bottom">{{itemHtml.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props:{
    hotCities:Array,
    cities:Object
  },
  name:"CityList",
  mounted(){
    this.scroll=new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-topbottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .6rem
      background #eeee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem  .1rem
      .button-wrapper
        width 33.33%
        float left
        .button
          margin .1rem
          padding .1rem 0
          border .02rem solid #ccc
          text-align center
          border-radius .06rem
    .item-list
      .item 
        line-height .76rem
        color #666
        padding-left .2rem
</style>