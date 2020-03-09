import React from 'react'
import Income from './Income'

export default class Balance extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {

        <Income
            
        />
        let totalBal = incomeTotalAmount - exesTotalAmount;

        return (
            <div>
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
    }
}