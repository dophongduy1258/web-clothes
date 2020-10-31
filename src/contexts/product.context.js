import React ,{Component} from "react";

export const ProductContext = React.createContext();

export default class ProductProvider extends Component{
    constructor(props){
        super(props);
        this.state={
            productList : []
        }
    }

    setProductList = (products)=>{
        console.log(products);
        this.setState({
            productList:products
        })
        
        localStorage.setItem('product',JSON.stringify(products));
    }



    render(){
        return(
            <ProductContext.Provider
                value={{
                    productList:this.state.productList,
                    setProductList:this.setProductList
                }}
            >
                    {this.props.children}
            </ProductContext.Provider>
        )
    }

}


