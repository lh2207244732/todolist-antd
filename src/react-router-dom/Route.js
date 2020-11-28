import React,{Component} from 'react'


import { Consumer } from './context'

/**
 * Route组件的核心功能：1.匹配路由，根据匹配的路由返回对应组件
 *                     2.获取路由中的参数 
 */

class Route extends Component{
    render(){
        return (<Consumer>
            {
                //定义一个函数组件来消费Provider提供的数据
                value=>{
                    // this.props是Route组件上添加的属性
                    const {path,component:Component,exact=false}=this.props
                    //pathname是Router组件传过来的
                    const {pathname}=value.location
                    
                }

            }
        </Consumer>)
    }
}
export default Route