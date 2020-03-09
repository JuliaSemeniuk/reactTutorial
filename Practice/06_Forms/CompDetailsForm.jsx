import React from 'react'
import {} from 'react-router-dom'

export default class CompDetails extends React.Component {
    constructor(props) {
        super(props);        

        this.state = {
            name: '',
            price: '',
            inStock: '',
            details: [
                
            ],           
        }
    }

    componentDidMount() {
        let details = window.localStorage.getItem('details');

        if (!details) {
            const str = JSON.stringify([{name: 'mouse', price: 2.0, inStock: false,}]);
            window.localStorage.setItem('details', str);
            details = str; 
        };

        const parsedDetails = JSON.parse(details); //from string to object

        console.log(parsedDetails);

        this.setState ({details: parsedDetails}) //add parsedDetails to this.state.details
    };    

    onChangeName = (event) => {
        let newItemName = event.target.value;
        this.setState({name: newItemName})
    }

    onChangePrice = (event) => {
        let newItemPrice = event.target.value;
        this.setState({price: newItemPrice})
    }

    onChangeInStock = (event) => {
        let newItemInStock = event.target.checked;
        this.setState({inStock: newItemInStock})
    }

    addNewItem = () => {
        const { details } = this.state;

        let newDetail = {
                name: this.state.name, 
                price: this.state.price, 
                inStock: this.state.inStock,
            };

        const newDetails = details.slice();
        newDetails.push(newDetail);
        this.setState({details: newDetails, name: '', price: '', inStock: ''});
        console.log(newDetails);
        const newStr = JSON.stringify(newDetails); 
        window.localStorage.setItem('details', newStr);

    };

    onClickDeleteItem = (event) => {
        const { details } = this.state;

        const index = parseInt(event.target.id);
        const newDetails = details.slice();

        newDetails.splice(index, 1);

        this.setState({details: newDetails});

        const newStr = JSON.stringify(newDetails); 
        window.localStorage.setItem('details', newStr);
    }

    render () {
        const { details } = this.state
        return (
            <div>
                
                <table border='1'align="left" width="300"> 
                    <tr>                           
                        <td><b>Name</b></td>
                        <td><b>Price</b></td>
                        <td><b>In Stock</b></td>   
                        <td><b>Delete</b></td>                                               
                    </tr>
                        {details.map((value, index) => {
                            return (
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td>{value.inStock === true ? 'Yes' : 'No'}</td>
                                    <td> <button onClick={this.onClickDeleteItem} id={index}>delete</button> </td>
                                </tr>                            
                            )
                        })}                        
                </table>  
                <table> Add new item
                    <tr>
                        <td>
                            <input onChange={this.onChangeName} type='text' placeholder='Name' value={this.state.name}></input><br/>
                            <input onChange={this.onChangePrice} type='number' placeholder='Price' value={this.state.price}></input><br/>
                            in stock
                            <input onChange={this.onChangeInStock} type='checkbox' id='mark' value={this.state.inStock}></input><br/>
                            <input onClick={this.addNewItem} type="button" value='Add to list'></input>
                        </td>
                    </tr>                 
                </table>
            </div>
        )
    } 
} 