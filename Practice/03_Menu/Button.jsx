import React from 'react'

export default class Button extends React.Component {
    onClickGetButtonId = () => {
        const { id } = this.props; //47 in Menu

        this.props.makeButtonActive(id);
    }

    render() {
        const { text, isActive } = this.props

        console.log(this.props)

        return (
            <button
                style={{ color: isActive ? 'red' : 'black' }}
                onClick={this.onClickGetButtonId}
            >
                {text}
            </button>
        )
    }
}