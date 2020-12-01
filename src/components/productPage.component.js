
import apiCaller from '../utils/apiCaller';
import React ,{Component, useState} from "react";
import './../css/productList/search.css'
import {connect, Provider} from 'react-redux'
import Product from './product.component'


class ProductPage extends Component{
    constructor(props){
        super(props);

        const token = localStorage.getItem("token");
        
        let isLogin = true;

        if(token == null){
            this.setState.isLogin = false
        }else{
            this.setState.isLogin = true
        }
        
        this.state={
            token:"",
            isLogin,

        }
    }
    render(){

        return(
            <div className="site-wrap">
                <Product/>
            </div>

        )
    }
}


const mapStateToProps = state =>{
    return {
        products : state.products
    }
}

export default connect(mapStateToProps,null)(ProductPage);