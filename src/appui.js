import React from 'react'
import { Input, Button, Row, Col, List } from 'antd';

// import PropTypes from 'prop-types'

export default class AppUi extends React.Component{
    render(){
        const {task,list,handleAdd,handleChange,deleteItem}=this.props
        return(
            <div className='app'>
                <Row>
                    <Col span={16}>  <Input placeholder="请输入..." value={task} onChange={handleChange} /></Col>
                    <Col span={8}><Button type="primary" onClick={handleAdd}>提交</Button></Col>
                </Row>
                <List
                    dataSource={list}
                    renderItem={item => (
                        <List.Item onClick={()=>{deleteItem(item.id)}}>
                            {item.task}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}