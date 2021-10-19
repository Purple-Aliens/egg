import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export default {
  namespaced: true,
  name: 'draft',
  state() {
    return {
    }
  },
  mutations,
  actions,
  getters,
}
