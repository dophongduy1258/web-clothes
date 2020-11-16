import React, {Component} from "react";

export const CartContext = React.createContext();
 
export class CartProvider extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            cartItem : []
        };

    }

    componentDidMount(){
        
    }

    addToCart = (product)=>{
        console.log("adding to cart",product);
        var {cartItem} = this.state;
        // this.setState({
        //     cartItem:this.state.cartItem.concat(product) //return new object
        //     // cartItem:this.state.cartItem.push(product)
        // });
        console.log( cartItem);
    }

    render(){
        return(

            <CartContext.Provider
                value={{
                    cartItem:this.state.cartItem,
                    addToCart:this.addToCart
                }}
            >
                {this.props.children}
            </CartContext.Provider>

        )
    }



}






