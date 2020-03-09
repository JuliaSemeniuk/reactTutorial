import React from 'react'

function sayHello() {
    return ('Hello')        
}

function sayHelloFiveTimes() {
    let word = 'Hello!'
    for (let i = 0; i < 4; i ++) {
        word = word + ' Hello!'
    }    
    return word
}


export default class Hello extends React.Component {
    render() {
        const hello = sayHello()
        const phrase = sayHelloFiveTimes()        

        return (
            <div>
                {hello} <br/>
                {phrase} <br/>
            </div>
        )
    }

}