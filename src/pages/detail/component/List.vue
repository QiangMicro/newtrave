<template>
  <div class="wrapper">
    <div class="map-top border-bottom">
      <div class="lef border-right">
        <div>
          <span class="score">4.9</span>
          <span class="text">分</span>
          <span class="des">很棒</span>
        </div>
        <div>
          <span class="content">评论与攻略</span>
          <span class="iconfont icon-return">&#xe6eb;</span>          
        </div>
      </div>
      <div class="right">
        <div>
          <span class="score-text">景点简介</span>
        </div>
        <div>
          <span class="content">开放时间、贴士</span>
          <span class="iconfont icon-return">&#xe6eb;</span>          
        </div>

      </div>
    </div>
    <div class="map-bot">定位 </div>
  </div>
</template>
<script>
export default {
  name:'DetailList'
}
</script>
<style lang="stylus" scoped>
.wrapper
  z-index 96
  border-top-left-radius:.2rem;
  border-top-right-radius:.2rem;
  padding .1rem
  background #ffffff
  .map-top  
    padding-bottom .1rem
    display flex
    .lef  
      flex 1
      .score
        font-size: .44rem;
        color: #ff8300;
        line-height: .44rem
      .text 
        font-size: .28rem;
        color: #ff8300;
        line-height: .48rem
      .des
        font-size: .28rem;
        color: #ff8300;
        line-height: .48rem;
        margin-left: .2rem
      .content
        font-size: .24rem;
        color: #9e9e9e;
        line-height: .32rem;
        margin-right: .2rem;
      .icon-return
        position: absolute;
        top: .3rem;
        right: .2rem;
        color: #9e9e9e;
        font-size: .24rem;
    .right
      flex 1
      .score-text
        font-size: .28rem;
        color: #212121;
        line-height: .48rem;
      .content
        font-size: .24rem;
        color: #9e9e9e;
        line-height: .32rem;
        margin-right: .2rem;
      .icon-return
        position: absolute;
        top: .3rem;
        right: .2rem;
        color: #9e9e9e;
        font-size: .24rem;
    .border-right
      margin 0 .1rem
  .map-bot
    padding-top .1rem
    text-align center
    line-height .5rem
</style>