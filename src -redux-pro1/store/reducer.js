// import { combineReducers } from 'redux'

import { combineReducers } from 'redux-immutable'
//负责合并所有组件的reducer并导出
import { reducer as todolistReducer } from '../pages/todolist/store'
import { reducer as navReducer } from '../pages/nav/store'



//注意合并之后导出的reducer生成的state的对象有所变化
export default combineReducers({
    todolist: todolistReducer,
    nav: navReducer
})