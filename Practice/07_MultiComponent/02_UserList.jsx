import React from 'react'
import User from './02_User'

export default class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {name: 'Ilon', id: '1'},
                {name: 'Victoria', id: '2'},
                {name: 'Joey', id: '3'},
            ],
        };
    };

    componentDidMount () {
        let users = window.localStorage.getItem('users');

        if (!users) {
            const str = JSON.stringify([
                {name: 'Ilon', id: '1'},
                {name: 'Victoria', id: '2'},
                {name: 'Joey', id: '3'},]);

            window.localStorage.setItem('users', str);
            
            users = str;
        }; 

        const parsedUsers = JSON.parse(users);
        this.setState({users: parsedUsers})
    }

    deleteUser = (event) => {
        const { users } = this.state;
        const index = parseInt(event.target.id);
        const newUsers = users.slice();
        newUsers.splice(index, 1);
        this.setState ({users: newUsers});

        const strNewUsers = JSON.stringify(newUsers);
        window.localStorage.setItem('users', strNewUsers);
    };

    onChangeName = (event) => {
        let newName = event.target.value;
        this.setState ({name: newName})
    };

    addNewUser = () => {
        const { users } = this.state;        

        let newUser = {
            name: this.state.name,
            id: parseInt(users.length+1),
        };

        const newUsers = users.slice();
        newUsers.push(newUser);
        this.setState({users: newUsers, name:''});

        const strNewUsers = JSON.stringify(newUsers);
        window.localStorage.setItem('users', strNewUsers);
    };

    render () {
        const { users } = this.state;
        return (
            <div>
            <table border ='1' align="left" width="300">
                 {users.map((val, index) => {
                     return (
                        <User
                        key={index}
                        name={val.name}
                        id={val.id}
                        deleteUser={this.deleteUser}
                    />)
                })}
            </table>
            
            <table> Add new User
                <tr>
                    <td>
                        <input onChange={this.onChangeName} type='text' placeholder='Name' value={this.state.name}></input>
                        <input onClick={this.addNewUser} type='button' value='Add to list'></input>
                    </td>
                </tr>
            </table>
            </div>
        )
    }
}