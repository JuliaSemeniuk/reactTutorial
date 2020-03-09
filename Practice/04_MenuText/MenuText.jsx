//Есть горизонтальное меню из трех кнопок, под меню выводится текст. 
//По нажатию на любую из них под кнопками изменяется текст. 
//Требуемая конструкция state: { buttons: [ { buttonText: ‘button1’, isActive: false, text: ‘First text'’ } ] }.
//Кнопки меню вынесены в отдельный компонент button
//контейнер для текста можно сделать обычным div и держать его в рендере компоненты Menu.

import React from 'react'

import Buttons from './Buttons'

export default class MenuText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            buttons: [
                {buttonText: 'First', isActive: false, text: 'I am the first button'},
                {buttonText: 'Second', isActive: false, text: 'I am the second button'},
                {buttonText: 'Third', isActive: false, text: 'I am the third button'},
            ]
        }
    }

    makeButtonActive = index => {
        const { buttons } = this.state;

        const newButtons = buttons.map((buttonValue, buttonIndex) => {
            if (buttonIndex === index) {
                return {
                    isActive: true,
                    buttonText: buttonValue.buttonText,
                    text: buttonValue.text
                }
            } else {
                return {
                    isActive: false,
                    buttonText: buttonValue.buttonText,
                    text: buttonValue.text
                }
            }
        })

        this.setState({ buttons: newButtons})
    }

    render() {
        const { buttons } = this.state

        let activeText = '';

        buttons.forEach(buttonValue => {
            if (buttonValue.isActive) {
                activeText = buttonValue.text
            }
        }) 

        return (
            <div>
            {buttons.map((buttonValue, buttonIndex) => (
            <Buttons 
                isActive={buttonValue.isActive}
                buttonText={buttonValue.buttonText}
                text={buttonValue.text}
                index={buttonIndex}
                makeButtonActive={this.makeButtonActive}
                />              
        ))} <div>{activeText}</div>
        </div>
        )
        
        
        
    }
}
