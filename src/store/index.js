import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
// vue使用第三方插件
Vue.use(Vuex)
// new vue一个store方法
export default new Vuex.Store({
  // 公用数据
  state,
  mutations
})