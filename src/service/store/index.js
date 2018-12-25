// 
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

// office
import office from './modules/office'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    office
  }
}