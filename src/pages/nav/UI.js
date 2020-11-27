import React from 'react'

import PropTypes from 'prop-types'


class UI extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name } = this.props
        return (
            <div>
                {name}
            </div>
        )
    }
}
UI.propTypes = {
    name: PropTypes.string.isRequired
}
export default UI