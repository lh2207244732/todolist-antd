import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'


class Home extends React.Component {
    render() {
        return (
            <div className='Home'>
                home    page
            </div>
        )
    }
}
class About extends React.Component {
    render() {
        return (
            <div className='About'>
                about page
            </div>
        )
    }
}
class User extends React.Component {
    render() {
        return (
            <div className='User'>
                user page
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Router>
                    {/* 写法一 */}
                    {/* <Route path='/home'> <Home /></Route>
                    <Route path='/about'><About /></Route>
                    <Route path='/user'><User /></Route> */}
                    <Route path='/home' component={Home} />
                    <Route path='/user' component={User} />
                    <Route path='/about' component={About} />
                </Router>
            </div>
        )
    }
}

export default App