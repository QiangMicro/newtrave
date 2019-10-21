<template>
  <div class="icons">
    <swiper :options="swiperOption" >
      <swiper-slide v-for='(page,index) of pages' :key="index" >
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class="icon-img">
            <img class="icon-imgs" :src="item.imgUrl" alt="景点门票" srcset="">
          </div>
          <p class="icon-text">{{item.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  props:{
    iconList:Array
  },
  name:'HomeIcont',
  data(){
    return{
      swiperOption:{
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  computed:{
    pages(){
      const pages=[]
      this.iconList.forEach((item,index)=>{
        const page=Math.floor(index/8)
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
  .icons
    overflow hidden
    height 0
    padding-bottom 50%
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        .icon-imgs
          height 100%
          display block
          margin 0 auto
      .icon-text
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $TextColor
        ellip()
</style>