import * as actions from './actions'
import * as getters from './getters'
import * as mutatios from './mutations'
import state from './state'

const journalModule = {
    namespaced:true,
    actions,
    getters,
    mutatios,
    state
}
export default journalModule