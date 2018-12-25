// user
import { fetchUserInfo } from '@/service/api';

const state = {
  user: '',
  count: 1
}

const getters = {
  count(state) {
    return state.count
  }
}

const actions = {
  // 获取用户信息
  async userInfo({
    commit
  }) {
    let res = await fetchUserInfo();
    commit('SET_USER_INFO', res.userinfo)
    return res;
  },
}

const mutations = {
  SET_LOGIN_USER(state, user) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}