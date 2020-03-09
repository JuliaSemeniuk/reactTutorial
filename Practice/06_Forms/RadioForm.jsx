import React from 'react'

export default class RadioForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            card: '',
            sex: '',
            users: [
                
            ],
        };
    };

    componentDidMount() {
        let users = window.localStorage.getItem('users');

        if (!users) {
            const usersStr = JSON.stringify([{name: 'Victoria', card: '000001', sex: 'Female'}]);
            window.localStorage.setItem('users', usersStr);
            users = usersStr;
        };

        const parsedUsers = JSON.parse(users);
        this.setState ({users: parsedUsers});
    }

    onChangeName = (event) => {
        let userName = event.target.value;
        this.setState({name: userName});
    }

    onChangeCard = (event) => {
        let userCard = event.target.value;
        this.setState({card: userCard});
    }

    onChangeSex = (event) => {
        let userSex = event.target.value;
        this.setState({sex: userSex});
    }

    onClickAddNewUser = () => {
        const { users } = this.state;

        let newUser = {
            name: this.state.name,
            card: this.state.card,
            sex: this.state.sex,
        };

        const newUsers = users.slice();
        newUsers.push(newUser);
        this.setState({users: newUsers, name:'', card:'', sex:''});

        const newUsersStr = JSON.stringify(newUsers);
        window.localStorage.setItem('users', newUsersStr);
    }

    onClickDeleteUser = (event) => {
        const { users } = this.state;

        const index = parseInt(event.target.id);
        const newUsers = users.slice();

        newUsers.splice(index, 1);

        this.setState({users: newUsers});

        const newUsersStr = JSON.stringify(newUsers);
        window.localStorage.setItem('users', newUsersStr);
    }

    render () {
        const { users } = this.state;

        return (
            <div>
                <table border='1' align='left' width='300'>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Card ID</b></td>
                        <td><b>Sex</b></td>
                        <td><b>Delete User</b></td> 
                    </tr>
                    {users.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.name}</td>
                                <td>{value.card}</td>
                                <td>{value.sex}</td>
                                <td><button onClick={this.onClickDeleteUser} id={index}>delete</button></td>
                            </tr>
                        )
                    })}
                </table>
                <table width='300'> Add new user
                    <tr>
                        <td>
                            <input onChange={this.onChangeName} type='text'placeholder='Name' value={this.state.name}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input onChange={this.onChangeCard} type='text'placeholder='Card ID' value={this.state.card}></input>
                        </td>
                    </tr> 
                    <tr>
                        <td>
                            <input onChange={this.onChangeSex} type='radio' name='sex' value='Female'></input>Female
                        </td>
                    </tr>
                    <tr>    
                        <td>
                            <input onChange={this.onChangeSex} type='radio' name='sex' value='Male'></input>Male
                        </td>
                    </tr> 
                    <tr>
                        <td><input onClick={this.onClickAddNewUser} type='button' value='Add to list'></input></td>
                    </tr>                               
                </table>
            </div>
        )
    }
}