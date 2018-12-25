import Vue from 'vue'
import Vuex from 'vuex'
import commonStore from '@/service/store'

Vue.use(Vuex)

export default new Vuex.Store({
    ...commonStore
})