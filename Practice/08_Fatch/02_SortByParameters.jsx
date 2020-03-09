import React from 'react'

export default class SortByParameters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repos: [],
            types: ['all', 'owner', 'member'],
            sorts: ['created', 'update', 'pushed', 'full_name'],
            directions: ['asc', 'desc'],
            filters: {type: 'all', sort: 'created', direction: 'asc'},
        };
    };

    componentDidMount () {
        fetch('https://api.github.com/users/coderaiser/repos').
        then(response => response.json()).
        then(response => {
            this.setState({repos: response.map(value => ({
                id: value.id,
                name: value.name,
                full_name: value.full_name,
                language: value.language,
            }))});
        });
    };

    sortByParam = (event) => {

        let item = event.target.value;
        let name = event.target.name;
        console.log('name: ' + name + ' and item: ' + item)

        const allFiltersWithValues = Object.keys(this.state.filters).filter(key => this.state.filters[key] !== '');

        let currReq = allFiltersWithValues.map(currFilter => currFilter + '=' + this.state.filters[currFilter] + '&');

       // ${currFilter}=${this.state.filters[currFilter]}&
       // currFilter + '=' + this.state.filters[currFilter] + '&'

        fetch('https://api.github.com/users/coderaiser/repos?' + currReq + name + '=' + item).
        then(response => response.json()).
        then(response => {
            console.log(this.state.repos, this.state.filter)
            this.setState({repos: response.map(value => ({
                id: value.id,
                name: value.name,
                full_name: value.full_name,
                language: value.language,
            })), filter: {type: item, sort: item, direction: item}
        }); 
        });


        this.setState({ filters: {
            ...this.state.filters,
            [name]: item
        } });


        // if (currentValue === this.state.types[0] || this.state.types[1] || this.state.types[2]) {
        // fetch('https://api.github.com/users/coderaiser/repos?type=' + currentValue).
        // then(response => response.json()).
        // then(response => {
        //     console.log('name: ' + currentName + ' and type: ' + currentValue)
        //     this.setState({repos: response.map(value => ({
        //         id: value.id, name: value.name, full_name: value.full_name, language: value.language,
        //     })), filter: {type: currentValue, sort: '', direction: ''}
        //     });
        // });
        // } if (currentValue === this.state.sorts[0] || this.state.sorts[1] || this.state.sorts[2] || this.state.sorts[3]) {
        // fetch('https://api.github.com/users/coderaiser/repos?sort=' + event.target.value).
        // then(response => response.json()).
        // then(response => {
        //     console.log('sort' + currentValue)
        //     this.setState({repos: response.map(value => ({
        //         id: value.id, name: value.name, full_name: value.full_name, language: value.language,
        //     })), filter: {type: '', sort: currentValue, direction: ''}
        // });
        // });
        // } //else {
        //     fetch('https://api.github.com/users/coderaiser/repos?direction=' + event.target.value).
        //     then(response => response.json()).
        //     then(response => {
        //         this.setState({repos: response.map(value => ({
        //             id: value.id, name: value.name, full_name: value.full_name, language: value.language,
        //         })), filter: {type: '', sort: '', direction: event.target.value}
        //     });
        //     });
        // }
        
    }

    cancel = () => {
        fetch('https://api.github.com/users/coderaiser/repos').
        then(response => response.json()).
        then(response => {
            this.setState({repos: response.map(value => ({
                id: value.id,
                name: value.name,
                full_name: value.full_name,
                language: value.language,
            })),
            filters: {type: 'all', sort: 'created', direction: 'asc'} });
        });
        
    }

    // sortByType = (event) => {
    //     console.log(event.target.value)
    //     fetch('https://api.github.com/users/coderaiser/repos?type=' + event.target.value).
    //     then(response => response.json()).
    //     then(response => {
    //         console.log(response)
    //         this.setState({repos: response.map(value => ({
    //             id: value.id,
    //             name: value.name,
    //             full_name: value.full_name,
    //             language: value.language,
    //         })) /*.filter(item => item.language === 'CSS')*/
    //     });
    //     });
    // };

    // sortBySort = (event) => {
    //     fetch('https://api.github.com/users/coderaiser/repos?sort=' + event.target.value).
    //     then(response => response.json()).
    //     then(response => {
    //         this.setState({repos: response.map(value => ({
    //             id: value.id,
    //             name: value.name,
    //             full_name: value.full_name,
    //             language: value.language,
    //         }))});
    //     });
    // };

    // sortByDirection = (event) => {
    //     fetch('https://api.github.com/users/coderaiser/repos?direction=' + event.target.value).
    //     then(responce => responce.json()).
    //     then(response => {
    //         this.setState({repos: response.map(value => ({
    //             id: value.id,
    //             name: value.name,
    //             full_name: value.full_name,
    //             language: value.language,
    //         }))});
    //     });
    // };
    

    render () {
        const { repos, types, sorts, directions } = this.state;
        return (
            <div>By type
                <select onChange={this.sortByParam} name='type'>
                    {types.map(value => {
                        return (
                            <option key={value}>{value}</option>
                        );
                    })}
                </select>
                By sort
                <select onChange={this.sortByParam} name='sort'>
                    {sorts.map(value => {
                        return (
                            <option key={value}>{value}</option>
                        );
                    })}
                </select>
                By direction
                <select onChange={this.sortByParam} name='direction'>
                    {directions.map(value => {
                        return(
                            <option key={value}>{value}</option>
                        )
                    })}
                </select>
                <button onClick={this.cancel}>Cancel</button>
                <table  border='1' width='800'align='left'>
                    <tbody>
                    <tr>
                        <td><b>id</b></td>
                        <td><b>name</b></td>
                        <td><b>full name</b></td>
                        <td><b>language</b></td>
                    </tr>
                    {repos.map((value) => {
                        return (
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.full_name}</td>
                                <td>{value.language}</td>
                            </tr>
                        );
                    })}</tbody>
                </table>
            </div>
        )
    }
}