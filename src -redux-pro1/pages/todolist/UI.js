import React from 'react'
import { Input, Button, Row, Col, List } from 'antd';
import PropTypes from 'prop-types'

class UI extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { task, list, handleAdd, handleChange, deleteItem } = this.props
        return (
            <div className='TodoList'>
                <Row>
                    <Col span={16}>  <Input placeholder="请输入..." value={task} onChange={handleChange} /></Col>
                    <Col span={8}><Button type="primary" onClick={handleAdd}>提交</Button></Col>
                </Row>
                <List
                    dataSource={list}
                    renderItem={item => (
                        <List.Item onClick={() => { deleteItem(item.id) }}>
                            {item.task}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
UI.propTypes = {
    task: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAdd: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}
export default UI