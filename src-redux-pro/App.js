import React from 'react'
import { connect } from 'react-redux'

import store from './store/store'
import AppUi from './appui'
import { getChangeAction, getAddAction, getDeleteAction, getLoadAction } from './store/actionCreate'

//容器组件（应用的顶层组件）
class App extends React.Component {

    constructor(props) {
        super(props)
        //使用Redux后初始化数据来自store
        // this.state = store.getState()

        // 监听事件改变状态（当store发生改变时触发 ）
        // store.subscribe(() => {
        //     this.setState(store.getState())
        // })
    }
    componentDidMount() {
        this.props.handleLogin()
    }
    render() {
        const { task, list, handleChange, handleAdd, deleteItem } = this.props
        return (
            <AppUi
                task={task}
                list={list}
                handleChange={handleChange}
                handleAdd={handleAdd}
                deleteItem={deleteItem}
            />
        )
    }
}
/**connect方法
 * 1.connect方法的作用是让组件和store建立连接
 * 2.connect方法返回一个方法，该返回方法接收一个组件作为参数，该返回方法执行时，返回一个和store已经建立连接的组件
 * 3.connect方法接收两个参数（都是函数）
 * 4.第一个参数用来映射属性
 * 5.第二个参数用来映射方法
 */
/**映射属性的函数
 * 该函数作为connect方法的第一个参数
 * 该函数的第一个参数接收的是store中的新的state
 * 该函数返回一个对象,这个对象的属性会被映射到组件的props上面
 * 该函数会在connect方法执行时被调用一次进行初始化，然后当state发生变化时自动被执行
 */
const mapStateToProps = (state) => {
    return {
        list: state.list,
        task: state.task
    }
}
/**映射方法的函数
 * 该函数作为connect方法的第二个参数
 * 该函数的第一个参数接收的是store的dispatch方法
 * 该函数的返回一个对象，这个对象的属性会被映射到组件的props上
 */
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange(event) {
            dispatch(getChangeAction(event.target.value))
        },
        handleAdd() {
            const id = Date.now()
            dispatch(getAddAction(id))
        },
        deleteItem(id) {
            dispatch(getDeleteAction(id))
        },
        handleLogin() {
            dispatch(getLoadAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)