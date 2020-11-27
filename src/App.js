import React from 'react'

import TodoList from './pages/todolist'
import Nav from './pages/nav'
import './index.css'

//容器组件（应用的顶层组件）
class App extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className='App'>
                <Nav />
                <TodoList />
            </div>
        )
    }
}

export default App