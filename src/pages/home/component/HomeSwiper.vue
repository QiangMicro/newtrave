<template>
  <div class="wrapper">
    <swiper :options="swiperOption"  >
      <!-- slides -->
      <swiper-slide v-for='item of swiperList' :key='item.id'>
        <img class="swiper-image" :src="item.imgeUrl" alt="去哪儿网">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  props:{
    swiperList:Array
  },
  name:'HomeSwiper',
  data(){
    return{
      swiperOption:{
        loop: true,
        pagination: '.swiper-pagination'
      },
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #ffffff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.5%
    background #eeeeee
    .swiper-image
      width 100%
</style>