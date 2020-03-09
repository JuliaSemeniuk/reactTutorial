import React from 'react'

export default class Gallery extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                {isActive: true, link: 'https://cdn.27.ua/499/c3/b4/115636_1.jpeg'}, //0
                {isActive: true, link: 'https://cdn.27.ua/499/c3/b6/115638_2.jpeg'}, //1
                {isActive: true, link: 'https://cdn.27.ua/499/c3/b8/115640_1.jpeg'}, //2
                {isActive: false, link: 'https://cdn.27.ua/499/c3/b9/115641_2.jpeg'}, //3
                {isActive: false, link: 'https://cdn.27.ua/499/c3/ba/115642_2.jpeg'}, //4
                {isActive: false, link: 'https://cdn.27.ua/499/c3/bb/115643_1.jpeg'}, //5
                {isActive: false, link: 'https://cdn.27.ua/499/c3/bc/115644_1.jpeg'}, //6
                {isActive: false, link: 'https://cdn.27.ua/499/c3/be/115646_1.jpeg'}, //7
                {isActive: false, link: 'https://cdn.27.ua/499/c3/bf/115647_1.jpeg'}, //8
            ]
        };
    };

    showLeftImg = () => {
        const { images } = this.state;

        let activeImages = [];

        images.map((value, index) => {
            if (value.isActive === true) {
                activeImages.push(index);
            };
        });

        console.log(activeImages);

        let theSmallestIndex = activeImages[0];

        activeImages.map((value, index) => {
            if (theSmallestIndex > activeImages[index+1]) {
                theSmallestIndex = activeImages[index+1]
            };
        });

        console.log(theSmallestIndex);

        let newGallery;

        if (activeImages.includes(images[0], images[1], images[2])) {
            newGallery = images.map((value, index) => {
                if (index == images.length-1) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } if (index == 0) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } if (index == 1) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } else {
                    return {
                        isActive: false,
                        link: value.link,
                    }
                }
            })
        } if (activeImages.includes(images[images.length-1], images[0], images[1])) {
            newGallery = images.map((value, index) => {
                if (index == images.length-2) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } if (index == images.length-1) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } if (index == 0) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } else {
                    return {
                        isActive: false,
                        link: value.link,
                    }
                }
            })
        } if (activeImages.includes(images[images.length-2], images[images.length-2], images[0])) {
            newGallery = images.map((value, index) => {
                if (index == images.length-3) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } if (index == images.length-2) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } if (index == images.length-1) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } else {
                    return {
                        isActive: false,
                        link: value.link,
                    }
                }
            })
        } else {
            return
            /*newGallery = images.map((value, index) => {
                if (index == theSmallestIndex-1) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } if (index == theSmallestIndex) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } if (index == theSmallestIndex+1) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } else {
                    return {
                        isActive: false,
                        link: value.link,
                    }
                }
            }*/
        }

        this.setState({images: newGallery})

    }

    showRightImg = () => {
        const { images } = this.state;

        let activeImages = [];

        images.map((value, index) => {
            if (value.isActive === true) {
                activeImages.push(index);
            };
        });

        console.log(activeImages);

        let theBiggestIndex = activeImages[0];
                
        activeImages.map((value, index) => {
            if (theBiggestIndex < activeImages[index+1]) {
                theBiggestIndex = activeImages[index+1]
            };
        });

        console.log(theBiggestIndex);

        let newGallery;

        if (theBiggestIndex != images.length-1) {
            newGallery = images.map((value, index) => {
                if (index == theBiggestIndex-1) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } if (index == theBiggestIndex) {
                    return {
                        isActive: true,
                        link: value.link,
                    }
                } if (index == theBiggestIndex+1) {
                    return {
                        isActive: true,
                        link: value.link,
                    }                
                } else {
                    return {
                        isActive: false,
                        link: value.link,
                    }
                }
            })
        } else {
            return
        }

        this.setState({images: newGallery})
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