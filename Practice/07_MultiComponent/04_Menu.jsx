import React from 'react'
import Row from './04_Row'

export default class MenuRow extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            rows: [
                {isActive: false, text: 'Main'},
                {isActive: false, text: 'About'},
                {isActive: false, text: 'Contacts'},
            ],
        };
    };

    onClickChangeColor = index => {
        const { rows } = this.state;

        const newRows = rows.map((rowValue, rowIndex) => {
            if (rowIndex === index) {
                return {
                    isActive: true,
                    text: rowValue.text,
                };
            } else {
                return {
                    isActive: false,
                    text: rowValue.text,
                };
            };
        });

        this.setState({rows: newRows})
    };

    render () {
        const { rows } = this. state;

        return rows.map((value, index) => (
            <Row
                key = {index}
                isActive = {value.isActive}
                text = {value.text}
                id = {index}
                onClickChangeColor = {this.onClickChangeColor}
            />
        ));
    }
}