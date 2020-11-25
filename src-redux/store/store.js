import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counter from './counter'


const store = createStore(counter, applyMiddleware(thunk));

export default store

/**redux工作流
 * 初始化阶段
 * 1.调用redux提供的createStore方法，传入一个函数(通常叫做counter)作为参数，创建一个redux store
 * 2.redux store调用一次counter函数，把render函数的返回值作为初始化的state保存在store中
 * 3.在UI组件构建时，通过redux store的getState方法获取store中的state,并把这个state作为组件初始化的state
 * 4.在UI组件构建时，会通过redux store的s
 * 更新阶段
 * 1.
 * 
 */