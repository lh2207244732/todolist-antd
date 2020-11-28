import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter as Router,Route,Switch,Redirect,Link,NavLink, useParams} from 'react-router-dom'

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
//useParams返回一个包含参数的对象，只能在函数组件中使用
// function User(props){
//     const {id}=useParams()
//     return (
//         <div className='User'>
//             user page user's id is {id}
//         </div>
//     )
// }
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
class Admin extends React.Component {
    render() {
        return (
            <div className='Admin'>
                <ul>
                    <li>
                        <NavLink activeClassName='selected' exact to='/admin/profile'>管理员配置</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='selected' exact to='/admin/123'>管理员中心</NavLink>
                    </li>
                </ul>
                <Switch>
                        <Route path='/admin/profile' render={()=><h1>管理员配置</h1>} />
                        <Route path='/admin/:id' render={(props)=>{return <h1>管理员 ID: {props.match.params.id}</h1>}} />
                </Switch>
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
    constructor(props){
        super(props)
        this.state={
            isLogoin:true  //模拟登录状态
        }
    }
    render() {

        const ProtectRoute=({component:Component,...rest})=>{
            return <Route {...rest} render={
                ()=>(this.state.isLogoin?<Component />:<h1>请用管理员账户登录</h1>)
            } />
        }

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
                        {/* <Route path='/user/:id' component={User} /> */}
                        <Route path='/user/:id' render={(props)=>{return <h1>hello user id is {props.match.params.id}</h1>}} />
                        <Route path='/about' component={About} />
                        <ProtectRoute path='/admin' component={Admin} />
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
                                    <NavLink activeClassName='selected' exact to='/user/123'>用户中心</NavLink>
                            </li>
                            <li>
                                    <NavLink activeClassName='selected' exact to='/user/profile'>用户配置</NavLink>
                            </li>
                            <li>
                                    <NavLink activeClassName='selected' exact to='/admin'>管理</NavLink>
                            </li>
                    </ul>
                </Router>
            </div>
        )
    }
}

export default App