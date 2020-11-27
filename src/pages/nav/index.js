import React from 'react'
import { connect } from 'react-redux'

import store from './store'
import UI from './UI'


//容器组件（应用的顶层组件）
class Nav extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { name } = this.props
        return (
            <UI
                name={name}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.get('nav').get('name')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)