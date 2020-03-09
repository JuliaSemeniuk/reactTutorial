import React from 'react'

function multiplyByFive(paramName) {
    return paramName.map(item => item * 5)
}

export default class OneParameterArray extends React.Component {
    render() {
        const firstArr = [1, 2, 3]
        const multipliedArr = multiplyByFive(firstArr)

        const secondArr = [3, 5, 9]
        const secondMultipliedArr = multiplyByFive(secondArr)

        return (
            <div>
                <div>{multipliedArr}</div>
                <div>{secondMultipliedArr}</div>
            </div>
        )
    }
}
