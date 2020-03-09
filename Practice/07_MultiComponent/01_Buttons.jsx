import React from 'react'

export default class Button extends React.Component {
    
    onClickGetButtonId = () => {

        const { id } = this.props;

        this.props.onClickMakeButtonActive(id);
    };

    render () {
        const { text, isActive } = this.props;
        return (
            <button onClick={this.onClickGetButtonId} style={{ color: isActive ? 'blue' : 'black'}}>
            { text }
        </button>
        );
    };
}