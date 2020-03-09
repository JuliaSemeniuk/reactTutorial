import React from 'react'

export default class userData extends React.Component {
    constructor(props) {
        super(props);        

        this.state = {
            userData: [
                
            ],
            name: '',
            lastName: '',
            age: '',
        }
    }

    componentDidMount () {
        let users = window.localStorage.getItem('users');

        if (!users) {
            const str = JSON.stringify([
                {name: "Julia", lastName: "Semeniuk", age: "28"},
                {name: "Tony", lastName: 'Spasskyi', age: "28"},
            ]);
            window.localStorage.setItem('users', str);
            users = str;
        };

        const parsedUsers = JSON.parse(users);
        this.setState({userData: parsedUsers});
    }

    onChangeNameField = (event) => {
        let newUserName = event.target.value;        
        this.setState({name: newUserName});                    
    }

    onChangeLastNameField = (event) => {
        let newUserlastName = event.target.value;        
        this.setState({lastName: newUserlastName});                    
    }

    onChangeAgeField = (event) => {
        let newUserAge = event.target.value;        
        this.setState({age: newUserAge});                    
    }

    addNewUser = () => {
        if (this.state.name === '' || this.state.lastName === '' || this.state.age === '') {
            alert('Please fill the missing fields')
            return;
        }
        

        console.log(this.state)

        const { userData } = this.state;
        let newUserObject = {
            name: this.state.name,
            lastName: this.state.lastName,
            age: this.state.age,
        };
        const newUserData = userData.slice();
        newUserData.push(newUserObject);
        this.setState({userData: newUserData, name: '', lastName: '', age: ''});

        const strNewUserData = JSON.stringify(newUserData);
        window.localStorage.setItem('users', strNewUserData);
    }

    deleteUser = (event) => {
        console.log(event.target.id)
        const index = parseInt(event.target.id);
        const { userData } = this.state;
        const newUserData = userData.slice();
        newUserData.splice(index, 1);
        this.setState({userData: newUserData});

        const strNewUserData = JSON.stringify(newUserData);
        window.localStorage.setItem('users', strNewUserData)
    }
    
    render () {
        const { userData } = this.state
        return (
            <div>

            <div>
            <table border ='1' align="left" width="300">
                    <tr>                           
                        <td><b>Name</b></td>
                        <td><b>Last Name</b></td>
                        <td><b>Age</b></td>                                                  
                    </tr>
                    {userData.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.name}</td>
                                <td>{value.lastName}</td>
                                <td>{value.age}</td>
                                <td onClick={this.deleteUser} id={index}>x</td>
                            </tr>
                        ) 
                    })}
                </table>
            </div>
                
            <div>
            <form>
                    <div>Enter your name<br/>
                        <input id='nameId' onChange={this.onChangeNameField} type="text" value={this.state.name}></input></div>
                    <div>Enter yourlast name<br/>
                        <input id='lastNameId' onChange={this.onChangeLastNameField} type="text" value={this.state.lastName}></input></div>
                    <div>Enter your age<br/>
                        <input id='ageId' onChange={this.onChangeAgeField} type="text" value={this.state.age}></input></div>
                    <div>
                        <input onClick={this.addNewUser} type="button" value='send'></input></div>
                </form>  
            </div>
                  
                
                  
            </div>
        )        
    }
}