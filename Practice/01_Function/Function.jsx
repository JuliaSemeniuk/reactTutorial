import React from 'react'
import Hello from './01_NoParam/01_Hello'
import StringsMethods from './02_OneParam/01_Strings'
import NumbersMethods from './02_OneParam/02_Numbers'
import Elements from './02_OneParam/03_Elements'
import BooleanFunctions from './03_Boolean/01_BooleanFunc'
import ArrayBase from './04_Arrays/01_Base'
import ArrayMethods from './04_Arrays/02_ArrayMethods'
import ArrayMethodsExtra from './04_Arrays/03_ArrayMethodsExtra'

export default class Function extends React.Component {
    render() {
        return (
            <div>
                <b>Task 7: Array Methods. Extra forEach/map exercises</b>
                <ArrayMethodsExtra/> <br/>
                <b>Task 6: Array Methods</b>
                <ArrayMethods/> <br/>
                <b>Task 5: Arrays. Base</b>
                <ArrayBase/> <br/>   
                <b>Task 4: Boolean Functions</b>
                <BooleanFunctions/> <br/>                
                <b>Task 3: Getting Array's and Object's elements</b>
                <Elements/> <br/>
                <b>Task 2: One Parameter. Numbers</b>
                <NumbersMethods/> <br/>
                <b>Task 2: One Parameter. Strings</b>
                <StringsMethods/> <br/>
                <b>Task 1: No Parameters</b>
                <Hello/> <br/> 
            </div>
        )
    }
}