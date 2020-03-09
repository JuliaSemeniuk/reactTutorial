import React from 'react'

export default class Task extends React.Component {

    makeTaskDone = () => {

        const { index4545 } = this.props;

        this.props.onChangeIsFinished(index4545);
    }


    render() {
        const { text, isFinished } = this.props;

        return (
            <tr>
                <td> <input onChange={this.makeTaskDone} type='checkbox' checked={isFinished}></input> </td>
                <td style={{textDecoration: isFinished ? 'line-through' : 'none'}}> { text } </td>
            </tr>
        )
    }    
}