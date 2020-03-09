import React from 'react'

export default class User extends React.Component {
render () {
        const { name, id } = this.props;
        return (
            <tr>
                <td>{ name }</td>
                <td>{ id }</td>
                <td><button onClick={this.props.deleteUser} >Delete</button></td>
            </tr>
        );
    }
}