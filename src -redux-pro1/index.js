import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './App'

import './index.css'

/**
 * 在Provider组件中指定store
 * Provider组件包裹应用的顶层组件，因此所有组件都能使用这个store
 */

const rootElement = document.getElementById('root')
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement
)