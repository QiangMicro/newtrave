<template>
  <div>
    <Header></Header>
    <HomeSwiper></HomeSwiper>
  </div>
</template>
<script>
import Header from '@/pages/home/component/Header'
import HomeSwiper from '@/pages/home/component/HomeSwiper'
export default {
  name:'Home',
  components:{
    Header,
    HomeSwiper
  }
}
</script>
<style>

</style>