import React from 'react'

import NoParameters from './NoParameters/NoParameters'
import OneParameterString from './OneParameter/OneParameterString'
import OneParameterNumber from './OneParameter/OneParameterNumber'
import OneParameterArray from './OneParameter/OneParameterArray'
import OneParameterObject from './OneParameter/OneParameterObject'

export default class FunctionMain extends React.Component {
    render() {
        return (
            <div>
                <NoParameters />
                {/* <OneParameterString />
                <OneParameterNumber />
                <OneParameterArray />
                <OneParameterObject /> */}
            </div>
        )
    }
}
