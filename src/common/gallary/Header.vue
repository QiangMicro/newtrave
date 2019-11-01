<template>
  <div>
    <router-link tag="div" to='/' class="header-abs" v-show='showAbs'>
      <span class="iconfont header-abs-back">&#xe658;</span>
    </router-link>
    <div class="header-fixed" v-show='!showAbs' :style="opacityStyle">
      <div class="header">
        景点详情
        <router-link to="/">
          <div class="iconfont header-back">&#xe658;</div>
        </router-link>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name:'CommonHeader',
  data(){
    return{
      showAbs:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods:{
    hadleScroll(){
      console.log('scroll');
      
      const top=document.documentElement.scrollTop
      if(top>60){
        let opacity=top/140
        opacity =opacity>1?1:opacity
        this.opacityStyle={opacity}
        this.showAbs=false
      }else{
        this.showAbs=true
      }
    }
  },
  // 此事件绑定在window对象上，故在其它页面也会有影响，特在重新渲染页面后阻止此事件
  activated(){
    window.addEventListener('scroll',this.hadleScroll)
  },
  deactivated(){
    window.removeEventListener('scroll',this.hadleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
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
    z-index 98
    .header-abs-back
      color #ffffff
      font-size .4rem
  .header
    z-index 99
    position fixed
    top 0
    right 0
    left 0
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