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
  name:'HomeIcont',
  data(){
    return{
      swiperOption:{
        loop: true,
        pagination: '.swiper-pagination'
      },
      iconList:[
        {
          id:'01',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          text:'景点门票'
        },{
          id:'02',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          text:'故宫'
        },       {
          id:'03',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          text:'北京必游地'
        },       {
          id:'04',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          text:'动植物园'
        },       {
          id:'05',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          text:'一日游'
        },       {
          id:'06',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
          text:'古北水镇'
        },       {
          id:'07',
          imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
          text:'北京欢乐谷'
        },       {
          id:'08',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          text:'赏红叶'
        }, {
          id:'09',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          text:'泡温泉'
        }]
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