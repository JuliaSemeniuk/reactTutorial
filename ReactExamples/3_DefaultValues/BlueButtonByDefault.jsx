import React from 'react'

export default class BlueButtonByDefault extends React.Component {
    render() {
        return (
            <div
                style={{
                    color: this.props.color ? 'blue' : this.props.color,
                }}
            />
        )
    }
}
