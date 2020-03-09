import React from 'react'

export default class ButtonJu extends React.Component {
    onChange = () => {
        const { index } = this.props

        this.props.makeButtonActive(index)
    }
    render () {
        const { text, isActive } = this.props
        return(
            <button
                style={{ color: isActive ? '#0B0B61' : '#0489B1'}}
                onClick={this.onChange}
            >{text}</button>
        )
    }
}