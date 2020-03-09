import React from 'react'

import ButtonJu from './ButtonJu'

export default class MenuJu extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            buttons: [
                {isActive: true, text: 'january'},
                {isActive: false, text: 'february'},
                {isActive: false, text: 'march'},
            ]
        }
    }

    makeButtonActive = index => {
        const { buttons } = this.state

        const newButtons = buttons.map((buttonValue, buttonIndex) => {
            if (buttonIndex === index) {
                return {
                    isActive: true,
                    text: buttonValue.text,
                }
            } else {
                return {
                    isActive: false,
                    text: buttonValue.text,
                }
            }
        })

        this.setState({buttons: newButtons})
    }

    render() {
        const { buttons } = this.state

        return buttons.map((button, index) => (
            <ButtonJu
               // key={index}
                isActive={button.isActive}
                text={button.text}
                index={index}
                makeButtonActive={this.makeButtonActive}
            />
        ))
    }
}