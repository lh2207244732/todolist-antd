import React from 'react'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";
import { Input, Button, Row, Col, List } from 'antd';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            task: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

    }

    handleChange(event) {
        const task = event.target.value
        this.setState({
            task
        })
    }
    handleAdd() {
        const { task } = this.state
        const item = {
            task: task,
            id: Date.now()
        }
        const list = [...this.state.list]
        list.push(item)
        this.setState({
            list,
            task: ''
        })
    }
    deleteItem(id) {
        let { list } = this.state
        list = list.filter(item => item.id != id)
        this.setState({
            list
        })
    }

    async componentDidMount() {
        const result = await axios.get('http://127.0.0.1:3000')
        this.setState({
            list: result.data
        })
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
