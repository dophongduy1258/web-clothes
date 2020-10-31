import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import { FiChevronDown,FiHeart } from "react-icons/fi";
import { FaCartPlus ,FaUser,FaTruck,FaRedoAlt,FaQuestionCircle,FaEnvelope,FaPhoneAlt} from 'react-icons/fa';
import { BiSearch } from "react-icons/bi";
import { IoMdPin } from "react-icons/io";


export default class Cart extends Component{
    render(){
        return(
            <div className="site-wrap">
                <header className="site-navbar" role="banner">
                    <div className="site-navbar-top">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                            <form action className="site-block-top-search">
                            <BiSearch/>
                            <input type="text" className="form-control border-0" placeholder="Search" />
                            </form>
                        </div>
                        <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                            <div className="site-logo">
                            <a href="index.html" className="js-logo-clone">Shoppers</a>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                            <div className="site-top-icons">
                            <ul>
                                <li><a href="#"><FaUser /></a></li>
                                <li><a href="#"><FiHeart /></a></li>
                                <li>
                                <Link to="/cart/">
                                    <FaCartPlus />
                                    <span className="count">2</span>
                                </Link>
                                </li> 
                                <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu" /></a></li>
                            </ul>
                            </div> 
                        </div>
                        </div>
                    </div>
                    </div> 
                    <nav className="site-navigation text-right text-md-center" role="navigation">
                    <div className="container">
                        <ul className="site-menu js-clone-nav d-none d-md-block">
                        <li className="has-children active">
                            <Link to="/">Home <FiChevronDown/></Link>
                            <ul className="dropdown">
                            <li><a href="#">Menu One</a></li>
                            <li><a href="#">Menu Two</a></li>
                            <li><a href="#">Menu Three</a></li>
                            <li className="has-children">
                                <a href="#">Sub Menu</a>
                                <ul className="dropdown">
                                <li><a href="#">Menu One</a></li>
                                <li><a href="#">Menu Two</a></li>
                                <li><a href="#">Menu Three</a></li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li className="has-children">
                        <Link to="/about/">About</Link>
                            <ul className="dropdown">
                            <li><a href="#">Menu One</a></li>
                            <li><a href="#">Menu Two</a></li>
                            <li><a href="#">Menu Three</a></li>
                            </ul>
                        </li>
                        <li><Link to="/product/">Product</Link></li>
                        <li><a href="#">Catalogue</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><Link to="/contact/">Contact</Link></li>
                        </ul>
                    </div>
                    </nav>
                </header>
                <div className="bg-light py-3">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Cart</strong></div>
                    </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                    <div className="row mb-5">
                        <form className="col-md-12" method="post">
                        <div className="site-blocks-table">
                            <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th className="product-thumbnail">Image</th>
                                <th className="product-name">Product</th>
                                <th className="product-price">Price</th>
                                <th className="product-quantity">Quantity</th>
                                <th className="product-total">Total</th>
                                <th className="product-remove">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className="product-thumbnail">
                                    <img src="images/cloth_1.jpg" alt="Image" className="img-fluid" />
                                </td>
                                <td className="product-name">
                                    <h2 className="h5 text-black">Top Up T-Shirt</h2>
                                </td>
                                <td>$49.00</td>
                                <td>
                                    <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
                                    </div>
                                    <input type="text" className="form-control text-center" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                    </div>
                                    </div>
                                </td>
                                <td>$49.00</td>
                                <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                                </tr>
                                <tr>
                                <td className="product-thumbnail">
                                    <img src="images/cloth_2.jpg" alt="Image" className="img-fluid" />
                                </td>
                                <td className="product-name">
                                    <h2 className="h5 text-black">Polo Shirt</h2>
                                </td>
                                <td>$49.00</td>
                                <td>
                                    <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
                                    </div>
                                    <input type="text" className="form-control text-center" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                    </div>
                                    </div>
                                </td>
                                <td>$49.00</td>
                                <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="row mb-5">
                            <div className="col-md-6 mb-3 mb-md-0">
                            <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
                            </div>
                            <div className="col-md-6">
                            <button className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <label className="text-black h4" htmlFor="coupon">Coupon</label>
                            <p>Enter your coupon code if you have one.</p>
                            </div>
                            <div className="col-md-8 mb-3 mb-md-0">
                            <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                            </div>
                            <div className="col-md-4">
                            <button className="btn btn-primary btn-sm">Apply Coupon</button>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 pl-5">
                        <div className="row justify-content-end">
                            <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-12 text-right border-bottom mb-5">
                                <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                <span className="text-black">Subtotal</span>
                                </div>
                                <div className="col-md-6 text-right">
                                <strong className="text-black">$230.00</strong>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md-6">
                                <span className="text-black">Total</span>
                                </div>
                                <div className="col-md-6 text-right">
                                <strong className="text-black">$230.00</strong>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <button className="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
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