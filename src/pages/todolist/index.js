import React from 'react'
import { connect } from 'react-redux'

// import store from './store'
import UI from './UI'
import { getChangeAction, getAddAction, getDeleteAction, getLoadAction } from './store/actionCreater'

//容器组件（应用的顶层组件）
class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.handleLogin()
    }
    render() {
        const { task, list, handleChange, handleAdd, deleteItem } = this.props
        return (
            <UI
                task={task}
                list={list}
                handleChange={handleChange}
                handleAdd={handleAdd}
                deleteItem={deleteItem}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.get('todolist').get('list'),
        task: state.get('todolist').get('task')
    }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)