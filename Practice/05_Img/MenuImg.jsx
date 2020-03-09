import React from 'react'

export default class MenuImg extends React.Component {
    constructor(props)  {
        super(props)

        this.state = {
            images : [
                {dish: 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/CsU8ntX0anD9ah0inCFjXb.jpg?tr=w-430', isActive: false},
                {dish: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/xtra_med/1451_1_1437988391.jpg?tr=w-430', isActive: true},
                {dish: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/xtra_med/1435_1_1436870697.jpg?tr=w-430', isActive: false},
                {dish: 'https://img.jamieoliver.com/jamieoliver/vi/S-V3XntNlTk/maxresdefault.jpg?tr=w-330', isActive: false}
            ],
        };
    };

    showLeftImg = () => {
        const { images } = this.state;

        let activeItem = null;
        
        images.map((imgVal, imgIndex) => {            
            if (imgVal.isActive === true) {
                activeItem = imgIndex
            };
        });

        let newImages;

        if (activeItem === 0) {
            newImages = images.map((imgVal, imgIndex) => {
                if (imgIndex === images.length-1) {
                    return {
                        isActive: true,
                        dish: imgVal.dish
                    } 
                } else {
                    return {
                        isActive: false,
                        dish: imgVal.dish
                    }  
                }
            })
        } else {
            newImages = images.map((imgVal, imgIndex) => {
                if (imgIndex === activeItem-1) {
                    return {
                        isActive: true,
                        dish: imgVal.dish
                    }                
                } else {
                    return {
                        isActive: false,
                        dish: imgVal.dish
                    }                
                }
            });
        }
        this.setState({ images: newImages });
    };

    showRightImg = () => {
        const { images } = this.state;

        let activeItem = null;
        
        images.map((imgVal, imgIndex) => {            
            if (imgVal.isActive === true) {
                activeItem = imgIndex
            };
        });

        let newImages;

        if (activeItem === images.length-1) {
            newImages = images.map((imgVal, imgIndex) => {
                if (imgIndex === 0) {
                    return {
                        isActive: true,
                        dish: imgVal.dish
                    }
                } else {
                    return {
                        isActive: false,
                        dish: imgVal.dish
                    } 
                }
            })
        } else {
            newImages = images.map((imgVal, imgIndex) => {
                if (imgIndex === activeItem+1) {
                    return {
                        isActive: true,
                        dish: imgVal.dish
                    }                
                } else {
                    return {
                        isActive: false,
                        dish: imgVal.dish
                    }                
                }
            })
        }

       
        this.setState({ images: newImages });
    };

    render(){
        const { images } = this.state;
        return (
            <div>
                <button onClick={this.showLeftImg}>{'<'}</button>
                <div>
                    {images.map((imgVal) => {
                        if (imgVal.isActive) {
                            return <img src= {imgVal.dish}/>
                        } else {
                            return null
                        }                        
                    }                        
                )}
                </div>
                <button onClick={this.showRightImg}>{'>'}</button>
            </div>
        )
    }
}