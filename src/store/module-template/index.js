import * as actions from './actions'
import * as getters from './getters'
import * as mutatios from './mutations'
import * as state from './state'

const myCustomModule = {
    namespaced:true,
    actions,
    getters,
    mutatios,
    state
}
export default myCustomModule