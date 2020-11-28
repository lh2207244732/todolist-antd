import React,{Component} from 'react'

import {Provider} from './context'

class HashRouter extends Component{
    constructor(props){
        super(props)
        this.state={
            loaction:{
                pathname:window.location.hash.slice(1)||'/'
            }
        }
    }

    componentDidMount(){
   
        //设置默认的hash
        window.location.hash=window.location.hash||'/'
        //监听hash的变化
        window.onchange=()=>{
            //通过改变state 更新页面
            this.setState({
                loaction:{
                    pathname:window.location.hash.slice(1)
                }
            })
        }
    }

    render(){
        const value={
            location:this.state.loaction 
        }
    return (<Provider value={value} >{this.props.children}</Provider>)
    }
}
export default HashRouter