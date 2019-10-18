<template>
  <div>
    <div class="title">猜你推荐</div>
    <ul >
      <li class="item border-bottom" v-for='item of itemList' :key="item.id"  >
        <img class="item-img" :src="item.imgUrl" :alt="item.title" >
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
        <div class="item-add">{{item.address}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'HomeRecommend',
  data(){
    return{
      itemList:[
        {
          id:'01',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1506/e8/e87354c876fd6c38.water.jpg_200x200_9c11d922.jpg',
          title:'北宫国家森林公园',
          desc:'北宫国家森林公园是丘陵型自然风景区。',
          address:'丰台区'
        },{
          id:'02',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title:'故宫',
          desc:'北宫国家森林公园是丘陵型自然风景区。',
          address:'东城区'
        },{
          id:'03',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
          title:'八达岭长城',
          desc:'北宫国家森林公园是丘陵型自然风景区。',
          address:'延庆县'
        },{
          id:'04',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1910/5b/5b66f51364e1fd15a3.img.png_200x200_eaaaee15.png',
          title:'北京欢乐谷',
          desc:'北宫国家森林公园是丘陵型自然风景区。',
          address:'朝阳区'
        },{
          id:'05',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
          title:'北京野生动物园',
          desc:'北宫国家森林公园是丘陵型自然风景区。',
          address:'大兴区'
        },{
          id:'06',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_200x200_331422ad.jpg',
          title:'京东石林峡',
          desc:'北宫国家森林公园是丘陵型自然风景区。',
          address:'平谷区'
        },{
          id:'07',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_200x200_8eb33f07.jpg',
          title:'恭王府',
          desc:'北宫国家森林公园是丘陵型自然风景区。',
          address:'西城区'
        },{
          id:'08',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg',
          title:'古北水镇',
          desc:'北宫国家森林公园是丘陵型自然风景区。',
          address:'密云县'
        }
      ]
    }
      
    
  }
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