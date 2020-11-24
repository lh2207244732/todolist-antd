import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,LOAD_DATA} from './actionType'

export const getChangeAction=(payload)=>{
    return{
        type:CHANGE_INPUT,
        payload:payload
    }
}
export const getAddAction=(payload)=>{
    return{
        type:ADD_ITEM,
        payload:payload
    }
}
export const getDeleteAction=(payload)=>{
    return{
        type:DELETE_ITEM,
        payload:payload
    }
}
export const getLoadAction=(payload)=>{
    return{
        type:LOAD_DATA,
        payload:payload
    }
}