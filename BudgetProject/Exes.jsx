import React from 'react'

export default class Exes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            amount: '',
            data: '',

            articles: [],
        }
    };

    componentDidMount () {
        let articles = window.localStorage.getItem('exes article');
        if (articles) {
            const parsedArticles = JSON.parse(articles);
            this.setState({...parsedArticles});
        };
    };

    getTitle = (event) => {
        const newTitle = event.target.value;
        this.setState({ title: newTitle });

        window.localStorage.setItem('exes article',
        JSON.stringify({...this.state, title: newTitle}));
    };

    getAmount = (event) => {
        const newAmount = event.target.value;
        this.setState({ amount: newAmount });

        window.localStorage.setItem('exes article', 
        JSON.stringify({ ...this.state, amount: newAmount}));
    };
    
    getData = (event) => {
        const newData = event.target.value;
        this.setState({ data: newData });

        window.localStorage.setItem('exes article', 
        JSON.stringify({...this.state, data: newData}));
    };

    addArticle = () => {
        const { articles } = this.state;
        const refreshArticles = articles.slice();
        const article = {
            title: this.state.title,
            amount: this.state.amount,
            data: this.state.data,
        };

        refreshArticles.push(article);

        this.setState ({ articles: refreshArticles, title: '', amount: '', data: '',});

        window.localStorage.setItem('exes article',
        JSON.stringify({...this.state, articles: refreshArticles, title: '', amount: '', data: '',}));
    };

    deleteArticle = (event) => {
        const { articles } = this.state;
        const refreshArticles = articles.slice();
        const index = parseInt(event.target.id);
        console.log('index: ' + index )

        refreshArticles.splice(index, 1);
        this.setState({ articles: refreshArticles });

        window.localStorage.setItem('exes article', 
        JSON.stringify({...this.state, articles: refreshArticles}));
    };

    render () {
        const { articles } = this.state;

        let totalAmount = 0;
        articles.map(value => {
            totalAmount = totalAmount + parseInt(value.amount)
        });

        return (
            <div>
                <div>
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
                            {articles.map((value, index) => {
                                return (
                                    <tr key={value}>
                                        <td>{value.title}</td>
                                        <td>{value.amount}</td>
                                        <td>{value.data}</td>
                                        <td><button onClick={this.deleteArticle} id={index}>x</button></td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan='2'>Total</td>
                                <td colSpan='2'>{totalAmount}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div>
                    <form>
                        <p>Add Exes Article</p>
                        <input onChange={this.getTitle} placeholder='title' value={this.state.title}></input><br/>
                        <input onChange={this.getAmount} placeholder='amount' value={this.state.amount}></input><br/>
                        <input onChange={this.getData} placeholder='data' value={this.state.data}></input><br/>
                        <input onClick={this.addArticle} type='button' value='Add'></input>
                    </form>
                    </div>
            </div>
        )
    }
}