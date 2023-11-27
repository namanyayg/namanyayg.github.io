const state = {
  viewType: null
}

const getters = {
  viewType (state) {
    return state.viewType
  }
}

const mutations = {
  setViewType (state, viewType) {
    state.viewType = viewType
  }
}

const actions = {
  fetchViewTypeFromRoute ({ commit }, $route) {
    const { hash } = $route
    const viewTypeRe = /#i-[a-z]+/
    // If hash is a viewtype, then store and return
    if (viewTypeRe.test(hash)) {
      const viewType = hash.replace('#i-', '')
      commit('setViewType', viewType)
      return hash
    }
    return null
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
