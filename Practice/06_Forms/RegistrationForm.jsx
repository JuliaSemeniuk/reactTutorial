import React from 'react'


export default class Registration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            password: '',
            confirmPassword:'',
            validationName: '',
            validationAge: '',
            validationPassword: '',
            validationConfirmPassword: '',
            userData: [
                {name: 'Tony', age: '28'}
            ],
        };
    };

    componentDidMount () {
        let users = window.localStorage.getItem('users');

        if (!users) {
            const str = JSON.stringify([{name: 'Tony', age: '28'}]);
            window.localStorage.setItem('users', str);

            users = str;
        };

        const parsedUsers = JSON.parse(users);

        this.setState({userData: parsedUsers});
    };

    onChangeName = (event) => {
        let newName = event.target.value;
        this.setState({name: newName}); 

        //checking name lenght

        const nameArr = this.state.name.split('');        
        
        if (nameArr.length+1 < 2) {
            const newValidationName = false;
            this.setState({validationName: newValidationName})            
        } else {
            const newValidationName = true;
            this.setState({validationName: newValidationName})            
        };  
              
    };

    onChangeAge = (event) => {
        let newAge = event.target.value;

        if (newAge < 18) {
            const newValidationAge = false;
            this.setState({validationAge: newValidationAge})            
        } else {
            const newValidationAge = true;
            this.setState({validationAge: newValidationAge})            
        };

        this.setState({age: newAge});
    };

    onChangePassword = (event) => {
        let newPassword = event.target.value;
        this.setState({password: newPassword});

        const passArr = this.state.password.split('');

        if (passArr.length+1 < 6) {
            const newValidationPassword = false;
            this.setState({validationPassword: newValidationPassword})            
        } else {
            const newValidationPassword = true;
            this.setState({validationPassword: newValidationPassword})            
        };

        
    };

    onChangeConfirmPassword = (event) => {
        let newConfirmPassword = event.target.value;

        if (this.state.password === newConfirmPassword) {
            const newValidationConfirmPassword = true;
            this.setState({validationConfirmPassword: newValidationConfirmPassword})            
        } else {
            const newValidationConfirmPassword = false;
            this.setState({validationConfirmPassword: newValidationConfirmPassword})            
        };

        this.setState({confirmPassword: newConfirmPassword});

        
    };

    onClickDeleteUser = (event) => {
        const { userData } = this.state;
        const newUserData = userData.slice();
        const index = parseInt(event.target.id);
        newUserData.splice(index, 1);
        this.setState({userData: newUserData});

        const strNewUserData = JSON.stringify(newUserData);
        window.localStorage.setItem('users', strNewUserData);
    };

    onClickAddUser = () => {       
       
        if (this.state.name === '' || this.state.age === '' || this.state.password === '' || this.state.confirmPassword === '') {
            alert('Please fill the missing fields');
            const newValidation = false;
            this.setState({validation: newValidation});
            return;
        };

        //name lenght validation
        const nameArr = this.state.name.split('');
        
        if (nameArr.length < 2) {
            alert('Your name must include 2 symbols or more');
            return;
        };

        //age validation
        if (this.state.age < 18) {
            alert('Your must be 18 years old or oldest');
            return;
        };

         //pass lenght validation
         const passArr = this.state.password.split('');
        
         if (passArr.length < 6) {
             alert('Your password must include 6 symbols or more');
             return;
         };
        
        //confirmationofpassword
        if (this.state.password != this.state.confirmPassword) {
            alert('Your passwords dose not match');
            return;
        };        

        const { userData } = this.state;
        const newUserData = userData.slice();
        const newUser = {
            name: this.state.name,
            age: this.state.age,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };
        newUserData.push(newUser);
        this.setState({userData: newUserData, name: '', age: '', password:'', confirmPassword:''});

        const strNewUserData = JSON.stringify(newUserData);
        window.localStorage.setItem('users', strNewUserData);
    };

    

    render () {
        const { userData } = this.state;
        return (
            <div>
                <table border='1' width='300'align='left'>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Age</b></td>
                        <td><b>Delete User</b></td>
                    </tr>
                    {userData.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td><button onClick={this.onClickDeleteUser} id={index}>delete</button></td>
                            </tr>
                        )
                    })}
                </table>
                <table>
                    <tr>
                        <td><input style={{fontWeight:'bold', borderColor: this.state.validationName ? '#32CD32' : '#FF6347'}} onChange={this.onChangeName} type='text' placeholder='Enter your name' value={this.state.name}></input></td>
                    </tr>
                    <tr>
                        <td><input style={{fontWeight:'bold', borderColor: this.state.validationAge ? '#32CD32' : '#FF6347'}} onChange={this.onChangeAge} type='number' placeholder='Enter your age' value={this.state.age}></input></td>
                    </tr>
                    <tr>
                        <td><input style={{fontWeight:'bold', borderColor: this.state.validationPassword ? '#32CD32' : '#FF6347'}} onChange={this.onChangePassword} type='password' placeholder='Enter your password' value={this.state.password}></input></td>
                    </tr>
                    <tr>
                        <td><input style={{fontWeight:'bold', borderColor: this.state.validationConfirmPassword ? '#32CD32' : '#FF6347'}} onChange={this.onChangeConfirmPassword} type='password'placeholder='Confirm your password' value={this.state.confirmPassword}></input></td>
                    </tr>
                    <tr>
                        <td><input onClick={this.onClickAddUser} type='button' value='Sign up'></input></td>
                    </tr>
                </table>              
            </div>
        )
    }
}

