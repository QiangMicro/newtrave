<template>
  <div>
    <DetailBanner></DetailBanner>
    <div class="content">
      <DetailList></DetailList>
    </div>
  </div>
</template>
<script>
import DetailBanner from './component/banner'
import DetailList from './component/List'
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailList
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height 50rem
</style>