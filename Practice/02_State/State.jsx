import React from 'react'

export default class State extends React.Component {
    constructor(props) {
        super(props);        

        this.state = {
            backgroundColor: '#5DADE2',
            text: 'текст, который нужно изменить',
            isSpanShown: false,
            regularList: ['word', 'word'],
        }
    }    

    handleClick = () => {
        if (this.state.backgroundColor === '#5DADE2') {
            this.setState({backgroundColor: '#F4D03F'})
        } else {
            this.setState({backgroundColor: '#5DADE2'})
        }
    }

    handleTextClick = () => {
        this.setState({text:'я изменился!'})
    }

    handleSpanDivClick = () => {
        if (!this.state.isSpanShown) {
            this.setState({isSpanShown: true})
        } else {
            this.setState({isSpanShown: false})
        }
    }

    handleAddWord = () => {
        const {regularList} = this.state;
        const newAddList = regularList.slice();
        newAddList.push('word')
        this.setState({regularList: newAddList})
    }

    handleRemoveWord = () => {
        const {regularList} = this.state;
        const newRemoveList = regularList.slice();
        newRemoveList.pop();
        this.setState({regularList: newRemoveList})
    }



    render () {

        console.log(this.state)

        /*if (this.state.isSpanShown){
            return (<span onClick={this.handleSpanDivClick}>I'm the Span</span>)
        } else {
           return <div onClick={this.handleSpanDivClick}>I'm the Div</div>
        }*/

        return(
            <div>
                <p>1. перекрашивание кнопки при клике на нее (изменение стилей в зависимости от state)</p>
                <button 
                    style={{backgroundColor: this.state.backgroundColor}}
                    onClick={this.handleClick}
                    >Click me!</button>

                <p>2. изменение текста внутри div на другой при клике на него (подстановка другого текста в зависимости от state)</p>
                <div 
                    onClick={this.handleTextClick}><b>{this.state.text}</b></div> 
                <p>список из 2 слов, рядом кнопка. при клике на кнопку добавляется новое слово (одно и то же)</p>
                <div>
                    <button onClick={this.handleAddWord}>Add one more</button>
                    <button onClick={this.handleRemoveWord}>Remove last item</button> 
                    <p>{this.state.regularList}</p>                  
                                    
                </div>

                         
            </div>
            
        )
    }
}