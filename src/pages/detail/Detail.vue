<template>
  <div>
    <DetailBanner></DetailBanner>
    <div class="content">
      <DetailList></DetailList>
      <DetailRecommend></DetailRecommend>
    </div>
  </div>
</template>
<script>
import DetailBanner from './component/banner'
import DetailList from './component/List'
import DetailRecommend from './component/recommended'
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailList,
    DetailRecommend
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height 50rem
    background #ccc
</style>