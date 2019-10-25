<template>
  <ul class="list" >
    <li class="item" v-for='(item,key) of cities' :key='key' @click="handClick">{{key}}</li>
  </ul>
</template>
<script>
export default {
  props:{
    cities:Object
  },
  name:'CityAlphabet',
  methods:{
    handClick(e){
      this.$emit('change',e.target.innerText)
      // console.log(e.target.innerText)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .list
    display  flex
    flex-direction column
    justify-content center
    position  absolute
    top .58rem 
    right 0
    bottom  0
    width .4rem
    .item 
      text-align center
      color $bgColor
      line-height .4rem
<<<<<<< HEAD

=======
>>>>>>> origin/city-componests
</style>