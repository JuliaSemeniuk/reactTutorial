import React from 'react'

export default class MenuCircleImg extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                {isActive: true, link: 'https://cdn.27.ua/499/c3/b4/115636_1.jpeg'},
                {isActive: false, link: 'https://cdn.27.ua/499/c3/b6/115638_2.jpeg'},
                {isActive: false, link: 'https://cdn.27.ua/499/c3/b8/115640_1.jpeg'},
                {isActive: false, link: 'https://cdn.27.ua/499/c3/b9/115641_2.jpeg'},
            ],
        };
    };

    showLeftImg = () => {
        const { images } = this.state;

        let activeImg;
        images.map((value, index) => {
            if (value.isActive === true) {
                activeImg = index
            };
        });

        let newImages;

        if (activeImg === 0) {
            newImages = images.map((value, index) => {
                if (index === images.length-1) {
                    return {
                        isActive: true,
                        link: value.link,
                    };
                } else {
                    return {
                        isActive: false,
                        link: value.link,
                    };
                };
            });
        } else {
            newImages = images.map((value, index) => {
                if (index === activeImg-1){
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } else {
                    return {
                        isActive: false,
                        link: value.link,
                    };
                };
            });
        };

        this.setState({images : newImages});
    };

    showRightImg = () => {
        const { images } = this.state;
        
        let activeImg =null;

        images.map((value, index) =>{
            if (value.isActive === true){
                activeImg = index
            };
        });

        let newImages;

        if (activeImg === images.length-1) {
            newImages = images.map((value, index) => {
                if (index === 0) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } else {
                    return {
                        isActive: false,
                        link: value.link,
                    }
                };
            });
        } else {
            newImages = images.map((value, index) => {
                if (index === activeImg+1) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } else {
                    return {
                        isActive: false,
                        link: value.link
                    }
                };
            });
        };

        this.setState({images: newImages})
    }

    render () {
        const { images } = this.state;
        return (
            <div>
                <button onClick={this.showLeftImg}>{'<'}</button>
                <div>{
                    images.map((value) => {
                        if (value.isActive === true) {
                            return <img src={value.link}/>
                        }
                    })
                }</div>
                <button onClick={this.showRightImg}>{'>'}</button>
            </div>
        )
    }
}