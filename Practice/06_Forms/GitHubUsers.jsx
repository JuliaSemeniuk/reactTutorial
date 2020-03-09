import React from 'react'

export default class GitHubUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storage: [
                {
                    login: '',
                    id: '',
                    avatar_url: '',
                    type: '',
                }
            ],
        };   
    };

    componentDidMount () {

        fetch('https://api.github.com/users').then(result => result.json()).then(result => {
            this.setState({storage: result.map(users => ({
                login: users.login,
                id: users.id,
                avatar_url: users.avatar_url,
                type: users.type,
            }))
            });
        });

        // let storage = window.localStorage.getItem('storage');

        // if (!storage) {
        //     const str = JSON.stringify([{name: 'Tony', link: '1111'}]);
        //     window.localStorage.setItem('storage', str);
        //     storage = str;
        // };

        // const parsedStorage = JSON.parse(storage);
        // this.setState({storage: parsedStorage});

        // fetch('https://pokeapi.co/api/v2/pokemon').then(result => result.json()).then(result => {
        //     console.log(result.results)
        //     this.setState({storage: result.results});
        // });
        // console.log('smth')

    };

    onChangeName = (event) => {
        let newName = event.target.value;
        this.setState({name: newName});
    }

    onChangeLink = (event) => {
        let newLink = event.target.value;
        this.setState({url: newLink});
    }

    onClickAdd = () => {
        if (this.state.name === '') {
            alert ('Please enter the name');
            return;
        };

        if (!this.state.url.includes('https://')){
            alert ('Error');
            return;
        }


        const { storage } = this.state;

        const newStorage =  storage.slice();

        let newItem = {
            name: this.state.name,
            url: this.state.url
        };

        newStorage.push(newItem);

        this.setState({storage: newStorage, name: '', url: ''});

        const strNewStorage = JSON.stringify(newStorage);
        window.localStorage.setItem('storage', strNewStorage);
    }

    onClickDelete = (event) => {
        const { storage } = this.state;

        let newStorage = storage.slice();

        let index = event.target.id;

        newStorage.splice(index, 1);

        this.setState({storage: newStorage});

        const strNewStorage = JSON.stringify(newStorage);
        window.localStorage.setItem('storage', strNewStorage);
    };

    render () {
        const { storage } = this.state;

        return (
            <div>
                <table border='1' width='300'align='left'>
                    <tr>
                        <td><b>Login</b></td>
                        <td><b>ID</b></td>
                        <td><b>Avatar</b></td>
                        <td><b>Type</b></td>
                        <td><b>Delete</b></td>
                    </tr>
                    {storage.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.login}</td>
                                <td>{value.id}</td>
                                <td>{value.avatar_url}</td>
                                <td>{value.type}</td>
                                <td><button onClick={this.onClickDelete} id={index}>delete</button></td>
                            </tr>
                        )
                    })}                    
                </table >                    
                <table width='300'align='left'>
                    <tr>
                        <input onChange={this.onChangeName} type='text' placeholder='Name' value={this.state.name}></input>
                    </tr>
                    <tr>
                        <input onChange={this.onChangeLink} type='text' placeholder='Link' value={this.state.url}></input>
                    </tr>
                    <tr>
                        <input onClick={this.onClickAdd} type='button' value='Add to list'></input>
                    </tr>
                </table>
            </div>
        )
    }
}