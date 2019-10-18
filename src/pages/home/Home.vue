<template>
  <div>
    <Header></Header>
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
export default {
  name:'Home',
  components:{
    Header,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeeked
  }
}
</script>
<style>

</style>