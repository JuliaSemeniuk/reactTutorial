import React from 'react'

export default class NullableButton extends React.Component {
    render() {
        if (this.props.isHidden) {
            return null
        }

        return <button>I'm a button</button>
    }
}
