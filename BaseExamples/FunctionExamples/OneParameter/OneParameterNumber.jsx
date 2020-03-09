import React from 'react'

function multiplyByFour(arg) {
    return arg * 4
}

export default class OneParameterNumber extends React.Component {
    render() {
        const firstNumber = 144
        const multipledNumber = multiplyByFour(firstNumber)

        const secondNumber = 398
        const multipliedSecondNumber = multiplyByFour(secondNumber)

        /* lines 18-21 do the same thing as 9-13.
             uncomment lines 18-21 and comment 9-13 to try */

        //  const firstNumber = 144
        //  const multipledNumber = firstNumber * 4
        //  const secondNumber = 398
        //  const multipliedNumber = secondNumber * 4

        return (
            <div>
                <div>{multipledNumber}</div>
                <div>{multipliedSecondNumber}</div>
            </div>
        )
    }
}
