import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter as Router,Route,Switch,Redirect,Link,NavLink} from 'react-router-dom'

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
                    {/* 写法一 */}
                    {/* <Route path='/home'> <Home /></Route>
                    <Route path='/about'><About /></Route>
                    <Route path='/user'><User /></Route> */}
                    {/* 写法二 */}
                    {/* Switch的作用：匹配到第一个之后，不再继续向下匹配 */}
                    {/* Redirect的作用：当路由匹配不到时，跳转的页面 */}
                    {/* 当无法匹配到路由时的两种处理方式
                        1.使用Redirect 2.使用Route 设置path='*'
                    */}
                    <Switch>
                        <Route exact={true} path='/' component={Home} />
                        <Route path='/home' component={Home} />
                        <Route path='/user/profile' component={UserProfile} />
                        <Route path='/user' component={User} />
                       
                        <Route path='/about' component={About} />
                        <Route path='/notFound' component={NotFound} />
                        <Redirect to='/notFound' />
                   
                        {/* <Route path="*" component={NotFound} />   */}
                    </Switch>
                         {/* Link和Navlink都是生成一个a链接标签 不同在于NavLink可以设置类名，进而设置样式 */}
                         <ul>
                        <li>
                            <Link to='/home'>首页</Link>
                        </li>
                        <li>
                            <Link to='/about'>关于</Link>
                        </li>
                        <li>
                            <NavLink activeClassName='selected' exact to='/user'>用户中心</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='selected' exact to='/user/profile'>用户配置</NavLink>
                        </li>
                        
                    </ul>
                </Router>
            </div>
        )
    }
}

export default App