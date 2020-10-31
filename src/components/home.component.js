import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import { FaCartPlus ,FaUser,FaTruck,FaRedoAlt,FaQuestionCircle,FaEnvelope,FaPhoneAlt} from 'react-icons/fa';
import { FiChevronDown,FiHeart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { IoMdPin } from "react-icons/io";



export default class Home extends Component{
    render(){
        return(
            // <div>
            //     <h2>Home Page</h2>
            //     <Link to="/contact/">contact</Link>
            //     <Link to="/cart/">cart</Link>
            // </div>

            //=========================================

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
                                <li><Link to="/register/"><FaUser /></Link></li>
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
                <div className="site-blocks-cover" style={{backgroundImage: "url('https://images.wallpapersden.com/image/download/small-memory_58461_3840x2160.jpg')"}} >
                    <div className="container" >
                    <div className="row align-items-start align-items-md-center justify-content-end">
                        <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                        <h1 className="mb-2">Fashion Changing Always</h1>
                        <div className="intro-text text-center text-md-left">
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                            <p>
                            <a href="#" className="btn btn-sm btn-primary">Shop Now</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="site-section site-section-sm site-blocks-1">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"  data-aos-delay>
                        <div className="icon mr-4 align-self-start">
                            <FaTruck style={{width:"20px"}} />
                        </div>
                        <div className="text">
                            <h2 className="text-uppercase">Free Shipping</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"  data-aos-delay={100}>
                        <div className="icon mr-4 align-self-start">
                            <FaRedoAlt />
                        </div>
                        <div className="text">
                            <h2 className="text-uppercase">Free Returns</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"  data-aos-delay={200}>
                        <div className="icon mr-4 align-self-start">
                            <FaQuestionCircle/>
                        </div>
                        <div className="text">
                            <h2 className="text-uppercase">Customer Support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="site-section site-blocks-2">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"  data-aos-delay>
                        <a className="block-2-item" href="#">
                            <figure className="image">
                                <img src="https://i.pinimg.com/236x/26/c0/de/26c0def016a944a8685e3c1b21a7d7d3.jpg" alt="" className="img-fluid" />
                            </figure>
                            <div className="text">
                            <span className="text-uppercase">Collections</span>
                            <h3>Women</h3>
                            </div>
                        </a>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"  data-aos-delay={100}>
                        <a className="block-2-item" href="#">
                            <figure className="image">
                                <img src="https://mfiles.alphacoders.com/670/670477.jpg" alt="" className="img-fluid" />
                            </figure>
                            <div className="text">
                            <span className="text-uppercase">Collections</span>
                            <h3>Children</h3>
                            </div>
                        </a>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"  data-aos-delay={200}>
                        <a className="block-2-item" href="#">
                            <figure className="image">
                                <img src="https://cdn.wallpapersafari.com/18/76/Lg6fkw.jpg" alt="" className="img-fluid" />
                            </figure>
                            <div className="text">
                            <span className="text-uppercase">Collections</span>
                            <h3>Men</h3>
                            </div>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="site-section block-3 site-blocks-2 bg-light">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                        <h2>Featured Products</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="nonloop-block-3 owl-carousel">
                            <div className="item">
                            <div className="block-4 text-center">
                                <figure className="block-4-image">
                                <img src="https://cavino.vn/wp-content/uploads/2018/01/bo-vest-xanh-xuoc.jpg" style={{width:"100px",height:"100px"}} alt="Image placeholder" className="img-fluid" />
                                </figure>
                                <div className="block-4-text p-4">
                                <h3><a href="#">Tank Top</a></h3>
                                <p className="mb-0">Finding perfect t-shirt</p>
                                <p className="text-primary font-weight-bold">$50</p>
                                </div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="block-4 text-center">
                                <figure className="block-4-image">
                                <img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid" />
                                </figure>
                                <div className="block-4-text p-4">
                                <h3><a href="#">Corater</a></h3>
                                <p className="mb-0">Finding perfect products</p>
                                <p className="text-primary font-weight-bold">$50</p>
                                </div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="block-4 text-center">
                                <figure className="block-4-image">
                                <img src="images/cloth_2.jpg" alt="Image placeholder" className="img-fluid" />
                                </figure>
                                <div className="block-4-text p-4">
                                <h3><a href="#">Polo Shirt</a></h3>
                                <p className="mb-0">Finding perfect products</p>
                                <p className="text-primary font-weight-bold">$50</p>
                                </div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="block-4 text-center">
                                <figure className="block-4-image">
                                <img src="images/cloth_3.jpg" alt="Image placeholder" className="img-fluid" />
                                </figure>
                                <div className="block-4-text p-4">
                                <h3><a href="#">T-Shirt Mockup</a></h3>
                                <p className="mb-0">Finding perfect products</p>
                                <p className="text-primary font-weight-bold">$50</p>
                                </div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="block-4 text-center">
                                <figure className="block-4-image">
                                <img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid" />
                                </figure>
                                <div className="block-4-text p-4">
                                <h3><a href="#">Corater</a></h3>
                                <p className="mb-0">Finding perfect products</p>
                                <p className="text-primary font-weight-bold">$50</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="site-section block-8">
                    <div className="container">
                    <div className="row justify-content-center  mb-5">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                        <h2>Big Sale!</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-7 mb-5">
                        <a href="#"><img src="https://d3avoj45mekucs.cloudfront.net/rojakdaily/media/2nicholas/malaysia/8886.jpg?ext=.jpg" alt="Image placeholder" className="img-fluid rounded" /></a>
                        </div>
                        <div className="col-md-12 col-lg-5 text-center pl-md-5">
                        <h2><a href="#">50% less in all items</a></h2>
                        <p className="post-meta mb-4">By <a href="#">Carl Smith</a> <span className="block-8-sep">•</span> September 3, 2018</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                        <p><a href="#" className="btn btn-primary btn-sm">Shop Now</a></p>
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