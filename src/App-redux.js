import React from 'react'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";
import { Input, Button, Row, Col, List } from 'antd';
import { createStore } from 'redux';

//设置一个默认初始状态
const defaultState = {
    list: [{ id: 1, task: 'redux' }],
    task: ''
}
/**注意！！！
 * 1.counter是一个纯函数（固定输入必须是一个固定输出），保证输出的方法不在counter中使用Date.now()或Math.Random()等方法生成数据
 * 2.counter是根据上一次的state和最新的action来更新状态
 * 3.counter必须返回一个新的state对象，为了避免数据混乱，state由store统一管理
 * 4.store根据返回的state更新store里面的state,组件使用getState获取store里面的state
 * action是一个对象，包含了操作类型和必要的参数，必须要保证操作类型唯一 
 */

function counter(state = defaultState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    if (action.type == 'LOAD_DATA') {
        //初始化加载网络数据
        newState.list = action.payload
    }
    if (action.type == 'CHANGE_INPUT') {
        //改变输入框的值
        newState.task = action.payload
    }
    if (action.type == 'ADD_ITEM') {
        //添加ITEM
        const list = {
            id: action.payload,
            task: newState.task
        }
        //清空输入框
        newState.task = ''

        newState.list.unshift(list)
    }
    if (action.type == 'DELETE_ITEM') {
        //删除ITEM
        newState.list = newState.list.filter(item => (item.id != action.payload))
    }
    return newState
}
/**
 * 创建一个store保存应用状态
 * 给store指定一个counter，此后每个store派发的action都会被转发到这个counter里面处理
 * 初始化store里面的state，会随机派发一个action到couter,counter会返回一个默认的state
 */
let store = createStore(counter);

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

    }


    handleChange(event) {
        // const task = event.target.value
        // this.setState({
        //     task
        // })
        store.dispatch({ type: 'CHANGE_INPUT', payload: event.target.value })
    }
    handleAdd() {
        // const { task } = this.state
        // const item = {
        //     task: task,
        //     id: Date.now()
        // }
        // const list = [...this.state.list]
        // list.push(item)
        // this.setState({
        //     list,
        //     task: ''
        // })
        const id = Date.now()
        store.dispatch({ type: 'ADD_ITEM', payload: id })
    }
    deleteItem(id) {
        // let { list } = this.state
        // list = list.filter(item => item.id != id)
        // this.setState({
        //     list
        // })
        store.dispatch({ type: 'DELETE_ITEM', payload: id })
    }

    async componentDidMount() {
        const result = await axios.get('http://127.0.0.1:3000')
        //请求成功后用dispatch派发一个action
        store.dispatch({ type: 'LOAD_DATA', payload: result.data })
    }

    render() {
        const { task, list } = this.state
        return (
            <div className='app'>
                <Row>
                    <Col span={16}>  <Input placeholder="请输入..." value={task} onChange={this.handleChange} /></Col>
                    <Col span={8}><Button type="primary" onClick={this.handleAdd}>提交</Button></Col>
                </Row>
                <List
                    dataSource={list}
                    renderItem={item => (
                        <List.Item onClick={this.deleteItem.bind(this, item.id)}>
                            {item.task}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
