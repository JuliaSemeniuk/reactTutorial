import React from'react'

function AllYouNeedIsInteger(param) {
    return Number.isInteger(param)
}

function PleaseBeNaN(param) {
    return Number.isNaN(param)
}

function Division275(param) {
    let divisionResult = param / 275;
    return divisionResult
}

function DivisionReminder(param) {
    let divisionReminderResult = param % 15;
    return divisionReminderResult;
}

function showInteger(param) {
    return Number.parseInt(param)
}

function showStringAsNumber(param) {
    return Number.parseFloat(param)
}

function showTwoNumbersAfterPoint(param) {
    return param.toFixed(2)
}

function showNumberAsString(param) {
    const someText = 'Hello, '
    return someText + param.toString()
}


export default class NumbersMethods extends React.Component {
    render () {
        const firstNumber = 123.152346
        const secondNumber = 156
        const thirdNumber = NaN
        const firstString = '55blabla'

        const firstNumberNotInteger = AllYouNeedIsInteger(firstNumber);
        const secondNumberIsInteger = AllYouNeedIsInteger(secondNumber);

        const thirdNumberIsNaN = PleaseBeNaN(thirdNumber);
        const firstNumberIsNumber = PleaseBeNaN(firstNumber);

        const firstNumberBy275 = Division275(firstNumber);

        const secondNumberBy15 = DivisionReminder(secondNumber);
        
        const firstNumberInteger = showInteger(firstNumber);

        const stringAsNumber = showStringAsNumber(firstString);

        const twoNumberAfterPoint = showTwoNumbersAfterPoint(firstNumber)

        const concatNumberWithString = showNumberAsString(firstNumber)

        return(
            <div>
                {firstNumberNotInteger.toString()} <br/>
                {secondNumberIsInteger.toString()} <br/>
                {thirdNumberIsNaN.toString()} <br/>
                {firstNumberIsNumber.toString()} <br/>
                {firstNumberBy275} <br/>
                {secondNumberBy15} <br/>
                {firstNumberInteger} <br/>
                {stringAsNumber} <br/>
                {twoNumberAfterPoint} <br/>
                {concatNumberWithString}
            </div>
        )
    }
}