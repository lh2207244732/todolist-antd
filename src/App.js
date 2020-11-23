import React from 'react'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";
import {  DatePicker } from 'antd';
import { Input } from 'antd';

import Item from './item'

export default class App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            list:[],
            task:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
    }
    
    handleChange(event){
        const task=event.target.value
        this.setState({
            task
        })
    }
    handleAdd(){
        const {task}=this.state
        const item={
            task:task,
            id:Date.now()
        }
        const list=[...this.state.list]
        list.push(item)
        this.setState({
            list,
            task:''
        })
    }
    deleteItem(id){
        let {list}=this.state
        list=list.filter(item=>item.id!=id)
        this.setState({
            list
        })
    }

    async componentDidMount(){
        const result=await axios.get('http://127.0.0.1:3000')
        this.setState({
            list:result.data
        })
    }

    render(){
        const {task,list}=this.state
        return (
            <div className ='app'>
                <div className='head'>
                {/* <input value={task} onChange={this.handleChange} /> */}
                <Input placeholder="请输入..." value={task} onChange={this.handleChange} />
             <button onClick={this.handleAdd}>提交</button>
            </div >
            <Item list={list} deleteItem={this.deleteItem} />
            </div> 
        )
    }
}
