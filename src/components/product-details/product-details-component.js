import  React,  { Component } from 'react';

class ProductDetailsomponent extends Component{

    render(){
        return(
            <ul>
                {this.props.details.map((value, id) => {
                    return <li key={id}>{value}</li>
                })}
            </ul>
        ) 
            
        
    }
}

export default ProductDetailsomponent