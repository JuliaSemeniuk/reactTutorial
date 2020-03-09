import React from 'react'

export default class Cats extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            errors: [
                {
                    name: '100',
                    link: ''
                },
                {
                    name: '101',
                    link: '' 
                }
            ]
        };
    };

    getCat = (index) => {
        const { errors } = this.state;
        let currentErrorName = errors[index].name;
        console.log(currentErrorName);

        fetch('https://http.cat/' + currentErrorName).then(response => response.json()).then(response => {
            console.log(response);
            this.setState({errors: response})
        })
    }

    render () {
        const { errors } = this.state;
        return (
            <div>
                <table>
                    <p>Error</p>
                    {errors.map(((val, index) => {
                        let errorLink = val.link + val.name;
                        console.log(errorLink)
                        return (
                            <p>
                                <button onClick={() => this.getCat(index)}>{val.name}</button> {/*индекс попадет в гетКэт нм 22 строке*/}
                            </p>
                        )
                    }))}
                </table>
            </div>
        )
    }
}