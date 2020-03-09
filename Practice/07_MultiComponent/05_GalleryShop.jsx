import React from 'react'
import Item from './05_ItemShop'

export default class GalleryShop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                {text: 'Bioderma Atoderm Shower Gel', price: '277', oldPrice: '314', currency: 'UAH', link: 'https://parfums.ua/media/cache/200/upload/products/o/15723026145db76f1602e46.jpg'},
                {text: 'Bioderma Sébium Mat Control', price: '443', oldPrice: '503', currency: 'UAH', link: 'https://parfums.ua/media/cache/200/upload/products/o/15723034815db772797d1fa.jpg'},
                {text: 'Bioderma Hydrabio Serum', price: '538', oldPrice: '603', currency: 'UAH', link: 'https://parfums.ua/media/cache/200/upload/products/o/15732062505dc538ea79540.jpg'},
                {text: 'Bioderma Atoderm SOS Spray', price: '417', oldPrice: '470', currency: 'UAH', link: 'https://parfums.ua/media/cache/200/upload/products/o/15723027625db76faaa1f2d.jpg'},
            ]
        };
    };    

    onClickCurrency = (event)=> {
        const { images } = this.state;
        let newImages;
        console.log('value: ', event.target.value)
        
        if (images[0].currency === event.target.value) {
            return;
        };

        if (event.target.value === "USD") {
            newImages = images.map((image) => {
                return {
                    text: image.text,
                    price: image.price / 8,
                    oldPrice: image.oldPrice / 8,
                    currency: 'USD',
                    link: image.link,
                }
            });
        } else {
            newImages = images.map((image) => {
                return {
                    text: image.text,
                    price: image.price * 8,
                    oldPrice: image.oldPrice * 8,
                    currency: 'UAH',
                    link: image.link,
                }
            });
        };
        this.setState({images: newImages})
    };
    
    render () {
        const { images } = this.state;
        return <div>
            {images.map((value, index) => (
            <Item
                key={index}
                text={value.text}
                price={value.price}
                oldPrice={value.oldPrice}
                currency={value.currency}
                link={value.link}
            />
        ))}
            <input onClick={this.onClickCurrency} type='radio' name='currency' value='UAH'></input>UAH
            <input onClick={this.onClickCurrency} type='radio' name='currency' value='USD'></input>USD
        </div>
    }
}