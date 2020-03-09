import React from 'react'

function getName(paramObj) {
    return paramObj.name
}

export default class OneParameterObject extends React.Component {
    render() {
        const user = { id: 1, name: 'Ju' }
        const name = getName(user)

        return (
            <div>
                <div>{name}</div>
            </div>
        )
    }
}
