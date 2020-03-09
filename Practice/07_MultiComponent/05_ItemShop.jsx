import React from 'react'

export default class Item extends React.Component {
    render () {
        const { text, price, oldPrice, currency, link } = this.props;
        return (
            <div>
                <table border ='1' align="left" width="300">
                    <tr><th colSpan='2'><img src={link}/></th></tr>
                    <tr><th colSpan='2'><p>{text}</p></th></tr>
                    <tr>
                        <td><p style={{textDecoration: 'line-through'}}>{oldPrice}</p></td>
                        <td><p style={{color: 'red', fontWeight: 'bold'}}>{price} {currency}</p></td>
                    </tr>
                </table>
            </div>
        )
    }
}