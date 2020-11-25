import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, LOAD_DATA } from './actionType'

const defaultState = {
    list: [{ id: 1, task: 'redux' }],
    task: ''
}
function counter(state = defaultState, action) {


    let newState = JSON.parse(JSON.stringify(state))

    if (action.type == LOAD_DATA) {

        newState.list = action.payload
    }
    if (action.type == CHANGE_INPUT) {

        newState.task = action.payload
    }
    if (action.type == ADD_ITEM) {

        const list = {
            id: action.payload,
            task: newState.task
        }

        newState.task = ''

        newState.list.unshift(list)
    }
    if (action.type == DELETE_ITEM) {

        newState.list = newState.list.filter(item => (item.id != action.payload))
    }
    return newState
}

export default counter