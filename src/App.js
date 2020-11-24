import React from 'react'

import store from './store/store'
import AppUi from './appui'

import { getChangeAction, getAddAction, getDeleteAction, getLoadAction } from './store/actionCreate'



export default class App extends React.Component {

    constructor(props) {
        super(props)
        //使用Redux后初始化数据来自store
        this.state = store.getState()

        // 监听事件改变状态（当store改变时触发 ）
        store.subscribe(() => {
            this.setState(store.getState())
        })

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

    }


    handleChange(event) {
        store.dispatch(getChangeAction(event.target.value))
    }
    handleAdd() {
        const id = Date.now()
        store.dispatch(getAddAction(id))
    }
    deleteItem(id) {
        store.dispatch(getDeleteAction(id))
    }

    componentDidMount() {
        // const result = await axios.get('http://127.0.0.1:3000')
        //请求成功后用dispatch派发一个action
        // store.dispatch(getLoadAction(result.data))
        store.dispatch(getLoadAction())
    }

    render() {
        const { task, list } = this.state
        return (
            <AppUi
                task={task}
                list={list}
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}
                deleteItem={this.deleteItem}
            />
        )
    }
}
