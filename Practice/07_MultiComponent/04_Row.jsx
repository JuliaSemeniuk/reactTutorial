import React from 'react'

export default class Row extends React.Component {

    onClickGetRowId = () => {
        const { id } = this.props;

        this.props.onClickChangeColor(id);
    };

    render () {
        const { text, isActive} = this.props;
        return (
            <button onClick={this.onClickGetRowId} style={{ color: isActive ? 'blue' : 'black'}}>
                { text }
            </button>
        )
    }
}