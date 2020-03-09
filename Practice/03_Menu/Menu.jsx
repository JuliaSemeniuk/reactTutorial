import React from 'react'

import Button from './Button'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            buttons: [
                { isActive: true, text: 'First' },
                { isActive: false, text: 'Second' },
                { isActive: false, text: 'Third' },
            ],
        }
    }

    makeButtonActive = index => {
       // console.log('index: ', index)
       
        const { buttons } = this.state

        const newButtons = buttons.map((button, buttonIndex) => {
            if (buttonIndex === index) {
                return {
                    isActive: true,
                    text: button.text,
                }
            } else {
                return {
                    isActive: false,
                    text: button.text,
                }
            }
        })

        this.setState({ buttons: newButtons })
    }

    render() {
        const { buttons } = this.state

        return buttons.map((button, index) => (
            <Button
                key={index}
                isActive={button.isActive}
                text={button.text}
                id={index}
                makeButtonActive={this.makeButtonActive}
            />
        //     <button
        //         style={{ color: button.isActive ? 'red' : 'black' }}
        //         onClick={()=>this.makeButtonActive(index)}
        //     >
        //     {button.text}
        // </button>
        ))
    }
}
