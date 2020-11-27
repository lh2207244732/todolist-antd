import { fromJS } from 'immutable'

const defaultState = fromJS({
    name: 'Amy'
})
function reducer(state = defaultState, action) {

    // let newState = JSON.parse(JSON.stringify(state))
    // return newState
    return state
}

export default reducer