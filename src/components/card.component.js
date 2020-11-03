import React ,{Component} from "react";
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { FaCartPlus ,FaUser,FaTruck,FaRedoAlt,FaQuestionCircle,FaEnvelope,FaPhoneAlt} from 'react-icons/fa';
import { FiChevronDown,FiHeart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { IoMdPin } from "react-icons/io";
import ProductContext from "../contexts/product.context";

export default class Card extends Component{
    render(){
        return(
            // <ProductContext.Consumer>
            //     {(productList)=>{
            //         productList.map((value)=>
            //                     <div className="col-sm-6 col-lg-4 mb-4">
            //                         <div className="block-4 text-center border">
            //                             <figure className="block-4-image">
            //                                 <a href="shop-single.html"><img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid" /></a>
            //                             </figure>
            //                             <div className="block-4-text p-4">
            //                                 <h3><a href="shop-single.html">Tank Top</a></h3>
            //                                 <p className="mb-0">Finding perfect t-shirt</p>
            //                                 <p className="text-primary font-weight-bold">$50</p>
            //                             </div>
            //                         </div>
            //                     </div>
            //         )
            //     }}
            // </ProductContext.Consumer>
            <div className="col-sm-6 col-lg-4 mb-4" >
                <div className="block-4 text-center border">
                    <figure className="block-4-image">
                        <a href="shop-single.html"><img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                        <h3><a href="shop-single.html">Tank Top</a></h3>
                        <p className="mb-0">Finding perfect t-shirt</p>
                        <p className="text-primary font-weight-bold">$50</p>
                    </div>
                </div>
            </div>
        )
    }
}