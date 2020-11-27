import { fromJS } from 'immutable'

import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, LOAD_DATA } from './actionType'

const defaultState = fromJS({
    list: [{ id: 1, task: 'redux' }],
    task: ''
})
function reducer(state = defaultState, action) {

    // let newState = JSON.parse(JSON.stringify(state))

    if (action.type == LOAD_DATA) {
        // newState.list = action.payload
        return state.set('list', action.payload)
    }
    if (action.type == CHANGE_INPUT) {

        // newState.task = action.payload
        return state.set('task', action.payload)
    }
    if (action.type == ADD_ITEM) {
        const item = {
            id: action.payload,
            task: state.get('task')
        }
        const list = [...state.get('list')]
        list.unshift(item)

        return state.merge({
            list,
            task: ''
        })
    }
    if (action.type == DELETE_ITEM) {
        const list = [...state.get('list')].filter(item => (item.id != action.payload))
        return state.set('list', list)
    }
    // return newState
    return state
}

export default reducer