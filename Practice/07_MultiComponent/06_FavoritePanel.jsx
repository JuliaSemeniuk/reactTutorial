import React from 'react'
import Item from './06_FavoriteItem'

export default class FavoritePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {id: '1', isActive: false, text: 'facebook', image: 'https://image.flaticon.com/icons/png/512/174/174848.png'},
                {id: '2', isActive: false, text: 'instagram', image: 'https://image.flaticon.com/icons/png/512/174/174855.png'},
                {id: '3', isActive: false, text: 'twitter', image: 'https://image.flaticon.com/icons/png/512/145/145812.png'},
                {id: '4', isActive: false, text: 'youtube', image: 'https://image.flaticon.com/icons/png/512/174/174883.png'},
            ]
        };
    };

    render () {
        const { items } = this.state;

        return items.map((value, index) => (
            <Item
                //key = { id }
                isActive = { value.isActive }
                text = { value.text }
                image = { value.image }
            />
        ))
    }
}