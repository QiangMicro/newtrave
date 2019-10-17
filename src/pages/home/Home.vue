<template>
  <div>
    <Header></Header>
    <HomeSwiper></HomeSwiper>
    <HomeIcon></HomeIcon>
  </div>
</template>
<script>
import Header from '@/pages/home/component/Header'
import HomeSwiper from '@/pages/home/component/HomeSwiper'
import HomeIcon from '@/pages/home/component/HomeIcon'
export default {
  name:'Home',
  components:{
    Header,
    HomeSwiper,
    HomeIcon
  }
}
</script>
<style>

</style>