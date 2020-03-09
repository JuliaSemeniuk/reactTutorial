import React from 'react'

export default class Income extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            title: '',
            amount: '',
            data: '',

            incomeArticle: [],

            titleEx: '',
            amountEx: '',
            dataEx: '',

            exesArticle: [],
        };
    };

    componentDidMount () {
        //Income
        let article = window.localStorage.getItem('article');
        console.log('article: ' + article)

        if (article) {
            const parsedArticle = JSON.parse(article);
            console.log('parsedArticle: ' + parsedArticle)
            this.setState({...parsedArticle});
        };
        
        //Exes
        let exesArticle = window.localStorage.getItem('exes article');
        console.log('exes article: ' + exesArticle)

        if (article) {
            const parsedExesArticle = JSON.parse(exesArticle);
            console.log('parsedArticle: ' + parsedExesArticle)
            this.setState({...parsedExesArticle});
        };
    };

    getTitle = (event) => {
        const newTitle = event.target.value;
        this.setState ({ title: newTitle});

        //check
        console.log('title: ' + newTitle);

        //local storage
        window.localStorage.setItem('article', 
        JSON.stringify({...this.state, title: newTitle}));
    };

    getExesTitle = (event) => {
        const newExesTitle = event.target.value;
        this.setState ({ titleEx: newExesTitle});

        //check
        console.log('titleEx: ' + newExesTitle);

        //local storage
        window.localStorage.setItem('exes article', 
        JSON.stringify({...this.state, title: newExesTitle}));
    };

    getAmount = (event) => {
        const newAmount = event.target.value;
        this.setState ({ amount: newAmount});

        //check
        console.log('amount: ' + newAmount);

        //local storage
        window.localStorage.setItem('article', 
        JSON.stringify({...this.state, amount: newAmount}));
    };

    getExesAmount = (event) => {
        const newExesAmount = event.target.value;
        this.setState ({ amountEx: newExesAmount});

        //check
        console.log('amountEx: ' + newExesAmount);

        //local storage
        window.localStorage.setItem('exes article', 
        JSON.stringify({...this.state, amountEx: newExesAmount}));
    };

    getData = (event) => {
        const newData = event.target.value;
        this.setState ({ data: newData});

        //check
        console.log('data: ' + newData);

        //local storage
        window.localStorage.setItem('article', 
        JSON.stringify({...this.state, data: newData}));
    };

    getExesData = (event) => {
        const newExesData = event.target.value;
        this.setState ({ dataEx: newExesData});

        //check
        console.log('dataEx: ' + newExesData);

        //local storage
        window.localStorage.setItem('exes article', 
        JSON.stringify({...this.state, dataEx: newExesData}));
    };

    addArticle = () => {
        //from inputs to state
        const { incomeArticle } = this.state;
        const refreshIncomeArticle = incomeArticle.slice();
        const article = {
            title: this.state.title,
            amount: this.state.amount,
            data: this.state.data,
        };
        refreshIncomeArticle.push(article);

        

        //setState
        this.setState ({incomeArticle: refreshIncomeArticle, title: '', amount: '', data: ''});

        //local storage
        window.localStorage.setItem('article', 
        JSON.stringify({...this.state, incomeArticle: refreshIncomeArticle, title: '', amount: '', data: ''}));
    };

    addExesArticle = () => {
        //from inputs to state
        const { exesArticle } = this.state;
        const refreshExesArticle = exesArticle.slice();
        const articleEx = {
            title: this.state.titleEx,
            amount: this.state.amountEx,
            data: this.state.dataEx,
        };
        refreshExesArticle.push(articleEx);        

        //setState
        this.setState ({exesArticle: refreshExesArticle, titleEx: '', amountEx: '', dataEx: ''});

        //local storage
        window.localStorage.setItem('exes article', 
        JSON.stringify({...this.state, exesArticle: refreshExesArticle, titleEx: '', amountEx: '', dataEx: ''}));
    };

    deteleArticle = (event) => {
        const { incomeArticle } = this.state;
        const refreshIncomeArticle = incomeArticle.slice();
        const index = parseInt(event.target.id);
        refreshIncomeArticle.splice(index, 1);
        this.setState({incomeArticle: refreshIncomeArticle});    

        //local storage
        const strRefreshIncomeArticle = JSON.stringify(refreshIncomeArticle);
        window.localStorage.setItem('article', strRefreshIncomeArticle);
    };  
    
    deteleExesArticle = (event) => {
        const { exesArticle } = this.state;
        const refreshExesArticle = exesArticle.slice();
        const index = parseInt(event.target.id);
        refreshExesArticle.splice(index, 1);
        this.setState({exesArticle: refreshExesArticle});    

        //local storage
        const strRefreshExesArticle = JSON.stringify(refreshExesArticle);
        window.localStorage.setItem('exes article', strRefreshExesArticle);
    }; 

    render () {
        const { incomeArticle } = this.state;
        const { exesArticle } = this.state;
        console.log(this.state)
        
        let incomeTotalAmount = 0;
        incomeArticle.map(value => {
            incomeTotalAmount = incomeTotalAmount + parseInt(value.amount)
        });

        let exesTotalAmount = 0;
        exesArticle.map(value => {
            exesTotalAmount = exesTotalAmount + parseInt(value.amount)
        });

        let totalBal = incomeTotalAmount - exesTotalAmount;

        return (
            <div>
                <div>
                    {/* table for Income */}
                    <table border='1' >
                        <thead align='center'>
                            <tr>
                                <td colSpan='4'><b>INCOME</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width='100'>title</td>
                                <td width='100'>amount</td>
                                <td width='100'>data</td>
                                <td width='20'>del</td>
                            </tr>
                            {incomeArticle.map((value, index) => {
                                return (
                                    <tr key={value}>
                                        <td>{value.title}</td>
                                        <td>{value.amount}</td>
                                        <td>{value.data}</td>
                                        <td><button onClick={this.deteleArticle} id={index}>x</button></td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan='2'>Total</td>
                                <td colSpan='2'>{incomeTotalAmount}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div>
                    <form>
                        <p>Add Cost Article</p>
                        <input onChange={this.getTitle} placeholder='title' value={this.state.title}></input><br/>
                        <input onChange={this.getAmount} placeholder='amount' value={this.state.amount}></input><br/>
                        <input onChange={this.getData} placeholder='data' value={this.state.data}></input><br/>
                        <input onClick={this.addArticle} type='button' value='Add'></input>
                    </form>
                </div>
                <div><br/>
                {/* table for Exes */}
                <table border='1' >
                        <thead align='center'>
                            <tr>
                                <td colSpan='4'><b>EXES</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width='100'>title</td>
                                <td width='100'>amount</td>
                                <td width='100'>data</td>
                                <td width='20'>del</td>
                            </tr>
                            {exesArticle.map((value, index) => {
                                return (
                                    <tr key={value}>
                                        <td>{value.title}</td>
                                        <td>{value.amount}</td>
                                        <td>{value.data}</td>
                                        <td><button onClick={this.deteleExesArticle} id={index}>x</button></td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan='2'>Total</td>
                                <td colSpan='2'>{exesTotalAmount}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <form>
                        <p>Add Exes Article</p>
                        <input onChange={this.getExesTitle} placeholder='title' value={this.state.titleEx}></input><br/>
                        <input onChange={this.getExesAmount} placeholder='amount' value={this.state.amountEx}></input><br/>
                        <input onChange={this.getExesData} placeholder='data' value={this.state.dataEx}></input><br/>
                        <input onClick={this.addExesArticle} type='button' value='Add'></input>
                    </form>
                </div>
                <br/>
                {/* table for total balance */}
                <div>
                    <table border='1'>
                        <thead>
                            <tr>
                                <td>Total Balance<b></b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width='320'>{totalBal}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
};