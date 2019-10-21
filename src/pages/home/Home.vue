<template>
  <div>
    <Header :city='city'></Header>
    <HomeSwiper :swiperList='swiperList'></HomeSwiper>
    <HomeIcon :iconList='iconList'></HomeIcon>
    <HomeRecommend :recommendList='recommendList'></HomeRecommend>
    <HomeWeeked :weekList='weekList'></HomeWeeked>
  </div>
</template>
<script>
import Header from '@/pages/home/component/Header'
import HomeSwiper from '@/pages/home/component/HomeSwiper'
import HomeIcon from '@/pages/home/component/HomeIcon'
import HomeRecommend from '@/pages/home/component/HomeRecommend'
import HomeWeeked from '@/pages/home/component/HomeWeeked'
import axios from 'axios'
export default {
  name:'Home',
  components:{
    Header,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeeked
  },
  data(){
    return{
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekList:[]
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      console.log(res)
      if(res.ret&&res.data){
        const data=res.data
        this.city=data.city
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.recommendList=data.recommendList
        this.weekList=data.weekList
      }  
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>
<style>

</style>
