import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";

import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, LOAD_DATA } from './actionType'

export const getChangeAction = (payload) => {
    return {
        type: CHANGE_INPUT,
        payload: payload
    }
}
export const getAddAction = (payload) => {
    return {
        type: ADD_ITEM,
        payload: payload
    }
}
export const getDeleteAction = (payload) => {
    return {
        type: DELETE_ITEM,
        payload: payload
    }
}
//默认的action只能是一个对象，不能是一个异步处理请求函数
//如果在定义store的地方添加中间键，就可以返回一个异步处理请求的函数了
export const getLoadAction = () => {
    return async function (dispatch) {
        const result = await axios.get('http://127.0.0.1:3000')
        dispatch({
            type: LOAD_DATA,
            payload: result.data
        })
    }

}