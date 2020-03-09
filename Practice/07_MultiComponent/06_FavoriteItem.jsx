import React from 'react'

export default class Item extends React.Component {

    render () {
        const { id, isActive, text, image } = this.props;

        return (
            
                <div style={{width: 150, height: 150, margin: 25}}>
                    <div style={{float: "right"}}><p style={{color: '#3B3B45'}}>x</p></div>
                    <div>
                        
                        <img src={this.props.image} width='125' height='125'/>
                        <div><p style={{color: '#3B3B45'}}>{this.props.text}</p></div>
                    </div>
                </div>
            
        )
    }
}