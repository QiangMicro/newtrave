<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
  </div>
</template>
<script>
import CityHeader from './component/CityHeader'
import CitySearch from './component/Search'
export default {
  name:'City',
  components:{
    CityHeader,
    CitySearch
  }
}
</script>
<style lang="stylus" scoped>

</style>