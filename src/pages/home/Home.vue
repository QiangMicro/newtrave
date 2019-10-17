<template>
  <div>
    <Header></Header>
    <HomeSwiper></HomeSwiper>
    <HomeIcon></HomeIcon>
    <HomeRecommend></HomeRecommend>
  </div>
</template>
<script>
import Header from '@/pages/home/component/Header'
import HomeSwiper from '@/pages/home/component/HomeSwiper'
import HomeIcon from '@/pages/home/component/HomeIcon'
import HomeRecommend from '@/pages/home/component/HomeRecommend'
export default {
  name:'Home',
  components:{
    Header,
    HomeSwiper,
    HomeIcon,
    HomeRecommend
  }
}
</script>
<style>

</style>