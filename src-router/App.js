import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter as Router,Route} from 'react-router-dom'


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
class UserProfile extends React.Component {
    render() {
        return (
            <div className='UserProfile'>
                UserProfile page
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
                    {/* 写法二 */}
                    {/* Switch的作用：匹配到第一个之后，不再继续向下匹配 */}
                    <Switch>
                        <Route exact={true} path='/' component={Home} />
                        <Route path='/home' component={Home} />
                        <Route path='/user' component={User} />
                        <Route path='/user/profile' component={UserProfile} />
                        <Route path='/about' component={About} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App