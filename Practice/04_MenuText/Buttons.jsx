//Есть горизонтальное меню из трех кнопок, под меню выводится текст. 
//По нажатию на любую из них под кнопками изменяется текст. 
//Требуемая конструкция state: { buttons: [ { buttonText: ‘button1’, isActive: false, text: ‘First text'’ } ] }.
//Кнопки меню вынесены в отдельный компонент button
//контейнер для текста можно сделать обычным div и держать его в рендере компоненты Menu.

import React from 'react'

export default class Buttons extends React.Component {
    onChange = () => {
        const { index } = this.props

        this.props.makeButtonActive(index)
    }

    render(){
        const { buttonText, isActive, text } = this.props
        
    return (
        
            <button
                style={{ color: isActive ? 'red' : 'black' }}
                onClick={this.onChange}
            >
                {buttonText}
            </button>
            
            
        )    
        
     
    }
}

