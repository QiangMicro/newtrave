import Vue from 'vue'
import Vuex from 'vuex'
// vue使用第三方插件
Vue.use(Vuex)
// new vue一个store方法
export default new Vuex.Store({
  // 公用数据
  state:{
    city:'北京'
  },
  actions:{
    changeCity(ctx,city){
      ctx.commit('changeCity',city)
    }
  },
  mutations:{
    changeCity(state,city){
      state.city=city
    }
  }
})