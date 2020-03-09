import React from 'react'

function createArrayOfThreeNumbers() {
    return [1, 2, 3]
}

export default class NoParameters extends React.Component {
    render() {
        const arr = createArrayOfThreeNumbers()

        return <div>{arr}</div>
    }
}
