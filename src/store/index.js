import { createStore } from 'vuex'

import actions from 'store/actions'
import getters from 'store/getter'
import mutations from 'store/mutations'
import state from 'store/state'

const store = createStore({
    state () { return state },
    mutations,
    actions,
    getters
})

export default store