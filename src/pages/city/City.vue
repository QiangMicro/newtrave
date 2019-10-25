<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :hotCities='hotCities' :cities='cities' :list='list' ></CityList>
    <CityAlphabet :cities='cities' @change='changeList'></CityAlphabet>
  </div>
</template>
<script>
import CityHeader from './component/CityHeader'
import CitySearch from './component/Search'
import CityList from './component/List'
import CityAlphabet from './component/Alphabet'
import axios from 'axios'
export default {
  name:'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data(){
    return{
      hotCities:[],
      cities:{},
      list:''
    }
  },
  methods:{
    getInforCity(){
      axios.get('/api/city.json')
        .then(this.getCityData)
    },
    getCityData(res){
      res=res.data
      console.log(res);
      
      if(res.ret&&res.data){
        const data=res.data
        this.hotCities=data.hotCities
        this.cities=data.cities
      }     
    },
    changeList(item){
      this.list=item
    }
  },
  mounted(){
    this.getInforCity()
  }
}
</script>
<style lang="stylus" scoped>

</style>