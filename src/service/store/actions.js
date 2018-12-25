// 全局actions

import { fetchUserInfo } from '@/service/api';

const actions = {
  // 获取用户信息
  async userInfo({ commit }) {
    let res = await fetchUserInfo();
    commit('SET_USER_INFO', res.userinfo);
    return res;
  }
};

export default actions;
