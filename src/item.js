import React from 'react'
export default class Item extends React.Component{
    constructor(props){
        super(props)
        this.handleDel=this.handleDel.bind(this)
    }
    handleDel(id){
        const {deleteItem}=this.props
        
        deleteItem(id)
    }
    render(){
        const {list}=this.props
        return(
            <ul className='list'>
                {
                    list.map((item)=><li className='item' key={item.id}  onClick={()=>this.handleDel(item.id)} >{item.task}</li>)
                }
            </ul>
        )
    }
}