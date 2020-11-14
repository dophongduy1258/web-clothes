import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import {ProductContext} from "../contexts/product.context";
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import { FiChevronDown,FiHeart } from "react-icons/fi";
import { FaCartPlus ,FaUser,FaTruck,FaRedoAlt,FaQuestionCircle,FaEnvelope,FaPhoneAlt} from 'react-icons/fa';
import { BiSearch } from "react-icons/bi";
import { IoMdPin } from "react-icons/io";
import apiCaller from "../utils/apiCaller";

export default class AddClothe extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            price:"",
            image:"",
            status:true,
            quantity:5,
            description:"",
        }
    }
    // generate random id
    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    
    onChange = (event)=>{
        var target = event.target;
        var value = target.value;
        var name = target.name;
        if(name === "status"){
            value = target.value === "true"? true : false;
        }
        this.setState({
            [name] : value
        })
    }

    onSubmit = (event)=>{
        event.preventDefault();
        var {name,price,image,status,quantity,description} = this.state;
        var {history} = this.props;
        apiCaller('api/addProduct','POST',{
            name:name,
            price:price,
            image:image,
            status:status,
            quantity:quantity,
            description:description,

        })
            .then((res)=>{
                console.log(res);
                // history.push('/')
                // redirect về trang trước đó
                history.goBack()}
            );
    }

    render(){
        return(
            <div className="site-wrap">
                
                <div className="bg-light py-3">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Add Clothe</strong></div>
                    </div>
                    </div>
                </div>  


                {/* body */}
                
                <div className="form-createClothes" style={{paddingTop:"50px",border:"15px solid black"}}>
                    <Container>
                    <p>Products</p>

                    <div style={{width:"600px",marginLeft:"200px"}}>
                        <Form onSubmit={this.onSubmit} >
                            <FormGroup>
                                <Label >Tên sản phẩm : </Label>
                                <Input type="text" onChange={this.onChange} name="name" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Giá : </Label>
                                <Input type="number" onChange={this.onChange} name="price" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Tình trạng : </Label>
                                <select name="quantity" value={this.state.quantity} onChange={this.onChange}>
                                    <option value={true}>Còn hàng</option>
                                    <option value={false}>Hết hàng</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label >Số lượng : </Label>
                                <Input type="number" onChange={this.onChange} name="quantity" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label >Chi tiết sản phẩm : </Label>
                                <Input type="text" onChange={this.onChange} name="description"  />
                            </FormGroup>

                            {/* <FormGroup tag="fieldset">
                                <legend>Radio Buttons</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Option one is this and that—be sure to include why it's great
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Option two can be something else and selecting it will deselect option one
                                    </Label>
                                </FormGroup>
                                <FormGroup check disabled>
                                    <Label check>
                                        <Input type="radio" name="radio1" disabled />{' '}
                                        Option three is disabled
                                    </Label>
                                </FormGroup>
                            </FormGroup> */}

                            {/* <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />
                                    Check me out
                                </Label>
                            </FormGroup> */}
                            
                            {/* <ProductContext.Consumer>
                                {({setProductList})=><Button type="submit" onClick={()=> setProductList(this.state)}  >Submit</Button>}
                            </ProductContext.Consumer> */}
                            <Button type="submit" >Submit</Button>
                        </Form>

                    </div>
                </Container>
                </div>





                <footer className="site-footer border-top">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="row">
                            <div className="col-md-12">
                            <h3 className="footer-heading mb-4">Navigations</h3>
                            </div>
                            <div className="col-md-6 col-lg-4">
                            <ul className="list-unstyled">
                                <li><a href="#">Sell online</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Shopping cart</a></li>
                                <li><a href="#">Store builder</a></li>
                            </ul>
                            </div>
                            <div className="col-md-6 col-lg-4">
                            <ul className="list-unstyled">
                                <li><a href="#">Mobile commerce</a></li>
                                <li><a href="#">Dropshipping</a></li>
                                <li><a href="#">Website development</a></li>
                            </ul>
                            </div>
                            <div className="col-md-6 col-lg-4">
                            <ul className="list-unstyled">
                                <li><a href="#">Point of sale</a></li>
                                <li><a href="#">Hardware</a></li>
                                <li><a href="#">Software</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <h3 className="footer-heading mb-4">Promo</h3>
                        <a href="#" className="block-6">
                            <img src="https://images.wallpapersden.com/image/download/small-memory_58461_3840x2160.jpg" alt="Image placeholder" className="img-fluid rounded mb-4" />
                            <h3 className="font-weight-light  mb-0">Finding Your Perfect Shoes</h3>
                            <p>Promo from  nuary 15 — 25, 2019</p>
                        </a>
                        </div>
                        <div className="col-md-6 col-lg-3">
                        <div className="block-5 mb-5">
                            <h3 className="footer-heading mb-4">Contact Info</h3>
                            <ul className="list-unstyled">
                            <li ><IoMdPin/>203 Fake St. Mountain View, San Francisco, California, USA</li>
                            <li ><FaPhoneAlt style={{marginRight:"90px"}}/><a href="tel://23923929210">+2 392 3929 210</a></li>
                            <li ><FaEnvelope style={{marginRight:"10px"}}/>emailaddress@domain.com</li>
                            </ul>
                        </div>
                        <div className="block-7">
                            <form action="#" method="post">
                            <label htmlFor="email_subscribe" className="footer-heading">Subscribe</label>
                            <div className="form-group">
                                <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email" />
                                <input type="submit" className="btn btn-sm btn-primary" defaultValue="Send" />
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                        <p>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        )
    }
}