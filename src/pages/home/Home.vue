<template>
  <div>
    <Header :city='city'></Header>
    <HomeSwiper></HomeSwiper>
    <HomeIcon></HomeIcon>
    <HomeRecommend></HomeRecommend>
    <HomeWeeked></HomeWeeked>
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
      city:''
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>
<style>

</style>
