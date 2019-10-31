<template>
  <div class="container" @click="changeImge">
    <div class="wrapper"  :options="swiperOptions" >
      <swiper >
        <swiper-slide>
          <img 
            class="detail-image" 
            src="http://img1.qunarzz.com/sight/p0/201403/07/a3231208ca4095bef77068c202d95bd2.jpg_r_800x800_44f2e684.jpg" 
            alt="去哪儿网"
          >
        </swiper-slide>
        <swiper-slide>
          <img 
            class="detail-image" 
            src="http://img1.qunarzz.com/sight/p0/1908/6c/6c4f551349dd8896a3.img.jpg_r_800x800_9593721e.jpg" 
            alt="去哪儿网"
          >
        </swiper-slide>
        <!-- <div class="swiper-pagination"  slot="pagination"></div>
         <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
    </div>
  </div>
   
</template>
<script>
export default {
  name:'CommonGallary',
  data(){
    return{
      swiperOptions:{
        pagination: '.swiper-pagination',
        observeParents:true,
        observer:true
      }
    }
  },
  methods:{
    changeImge(){
      this.$emit('showImage')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      overflow hidden
      width 100%
      height 0
      padding-bottom 100%
      .detail-image
        width 100%
      .swiper-scrollbar
        color #ffffff
</style>