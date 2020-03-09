import React from 'react'
import Button from './01_Buttons'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttons: [
                {isActive: true, text: 'Main'},
                {isActive: false, text: 'About'},
                {isActive: false, text: 'Contacts'},
            ],
        };
    };

    onClickMakeButtonActive = index => {
        const { buttons } = this.state;

        const newButtons = buttons.map((buttonValue, buttonIndex) => {
            if (buttonIndex === index) { // index on 17 string
                return {
                    isActive: true,
                    text: buttonValue.text,
                };
            } else {
                return {
                    isActive: false,
                    text: buttonValue.text,
                };
            };
         });

         this.setState({ buttons: newButtons });
    };

    render () {
        const { buttons } = this.state;
       
            return buttons.map((value, index) => (
            
                    <Button
                        key={index}
                        isActive={value.isActive}
                        text={value.text}
                        id={index}
                        onClickMakeButtonActive={this.onClickMakeButtonActive}
                    />
            
            ));
    };
}