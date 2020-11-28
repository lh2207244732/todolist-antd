import React from 'react'
// import { HashRouter as Router,Route,Switch,Redirect,Link,NavLink, useParams} from 'react-router-dom'
import {HashRouter as Router,Route} from './react-router-dom'

class Home extends React.Component {
    render() {
        console.log('location',this.props)
        console.log(window.location.hash.slice(1))
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
                user page user's id is {this.props.match.params.id}
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

class NotFound extends React.Component {
    render() {
        return (
            <div className='NotFound'>
               404 NotFound page
            </div>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Router>
                        <Route path='/home' component={Home} />
                </Router>
            </div>
        )
    }
}

export default App