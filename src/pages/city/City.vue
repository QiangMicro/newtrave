<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
  </div>
</template>
<script>
import CityHeader from './component/CityHeader'
import CitySearch from './component/Search'
import CityList from './component/List'
export default {
  name:'City',
  components:{
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>
<style lang="stylus" scoped>

</style>