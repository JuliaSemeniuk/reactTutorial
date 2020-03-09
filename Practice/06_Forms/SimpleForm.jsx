import React from 'react'

export default class SimpleForm extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            name: '',
            lastName: '',
            age: '',
            words: []
        }   
    }   

    changeNameHandler = (event) => {
        let userName = event.target.value;
        this.setState({name: userName});        
    }

    changeLastNameHandler = (event) => {
        let userLastName = event.target.value;
        this.setState({lastName: userLastName});        
    }

    changeAgeHandler = (event) => {
        let userAge = event.target.value;
        this.setState({age: userAge});        
    }

    clickHandler = () => {
        let info = [];
        info.push(this.state.name, this.state.lastName, this.state.age)
        alert(info);
    }    

    /*clickHandler = () => {
        let newList = this.state.words.slice(); // копия массива по новой ссылке
        newList.push(this.state.text)
        this.setState({words: newList})
    }*/       
    
    render () {
        console.log(this.state.words)
        return (
            <div>
                <form>
                    <div>{this.state.words}</div>
                    <div>Enter your name<br/><input onChange={this.changeNameHandler} type="text" value={this.state.text}></input></div>
                    <div>Enter yourlast name<br/><input onChange={this.changeLastNameHandler} type="text" value={this.state.text}></input></div>
                    <div>Enter your age<br/><input onChange={this.changeAgeHandler} type="text" value={this.state.text}></input></div>
                    <div><input onClick={this.clickHandler} type="button" value='send'></input></div>
                </form>
            </div>
        )
    }
}