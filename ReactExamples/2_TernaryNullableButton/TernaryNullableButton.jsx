import React from 'react'

export default class TernaryNullableButton extends React.Component {
    render() {
        return this.props.isHidden ? null : <button>I'm a button</button>
    }
}
