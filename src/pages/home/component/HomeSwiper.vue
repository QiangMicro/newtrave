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
  name:'HomeSwiper',
  data(){
    return{
      swiperOption:{
        loop: true,
        pagination: '.swiper-pagination'
      },
      swiperList:[{
        id:'001',
        imgeUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/78b240572657a6da67e662540c846dd6.jpg_750x200_b75c8be9.jpg'
      },{
        id:'002',
        imgeUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/06e65ace8dce3638e847b04e975489d1.jpg_750x200_a2dcb0a4.jpg'
      }]
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