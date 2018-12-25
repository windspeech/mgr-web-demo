// mutations

const mutations = {
  SET_LOGIN_USER(state, user) {
    state.user = user;
  },
  SET_PERMIT(state, permits) {
    state.permits = permits;
  }
};

export default mutations;
