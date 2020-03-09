import React from 'react'

function showSummuryOf3thAnd5thEllements(param) {
    const summury = param[2] + param[4]
    return (summury)
}

function showValueAndIndexPreLastElement(param) {
    const valueElem = param[param.length-2] // 27 
    const indexElem = param.length-2 // 6

    const newObj = {value: valueElem, index: indexElem}

    return('Value:' + newObj.value + 'Index:' + newObj.index)
}

function showSummuryOfMultiplicOfFirstAndLastEllements(param) {
    const sum = param[0] * param[param.length-1]
    return (sum)
}

function showSummuryOfMultiplicOfFirstAndLastIndexes(param) {
    const sum = 1 * param.length-1
    return (sum)
}

export default class ArrayBase extends React.Component {
    render () {
        const firstArray = [1, 13, 3, 4, 5, 6, 27, 58] // 3+5=8
        const summuryOf3thAnd5thEllements = showSummuryOf3thAnd5thEllements(firstArray);

        const valueAndIndexPreLastElement = showValueAndIndexPreLastElement(firstArray);

        const summuryOfMultiplicOfFirstAndLastEllements = showSummuryOfMultiplicOfFirstAndLastEllements(firstArray);

        const summuryOfMultiplicOfFirstAndLastIndexes = showSummuryOfMultiplicOfFirstAndLastIndexes(firstArray);
        return(
            <div>
                {summuryOf3thAnd5thEllements} <br/>
                {valueAndIndexPreLastElement} <br/>
                {summuryOfMultiplicOfFirstAndLastEllements} <br/>
                {summuryOfMultiplicOfFirstAndLastIndexes}
            </div>
        )
    }
}
