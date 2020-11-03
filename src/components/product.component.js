import React ,{Component,useContext} from "react";
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { FaCartPlus ,FaUser,FaTruck,FaRedoAlt,FaQuestionCircle,FaEnvelope,FaPhoneAlt} from 'react-icons/fa';
import { FiChevronDown,FiHeart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { IoMdPin } from "react-icons/io";
import {ProductContext} from "../contexts/product.context";
// import Card from "../components/card.component";
var randomstring = require("randomstring");

export default class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            productList : []
        }
    }

    
    // tạo random data
    onGenerateData = ()=>{
        var product = [
            {
            id: this.onGenerateID(),
            name:'vest',
            price:"200000",
            image:"https://vestdep.net/upload/vestdep/2017/08/bo-vest-nam-xanh-caro-denim-cao-cap-3.jpg",
            description:"egfeagaeg",
            },
            {
            id:this.onGenerateID(),
            name:'blaze',
            price:"250000",
            image:"https://cf.shopee.vn/file/c8e9dce4a61f4fc97965a55a01645e9f",
            description:"db5b45b",
            },
            {
            id:this.onGenerateID(),
            name:'hoodie',
            price:"100000",
            image:"https://cf.shopee.vn/file/685369fcf3d967f43ce0b320a1533b46",
            description:"3wgv34g2t",
            },
        ]
        localStorage.setItem('product',JSON.stringify(product));
        console.log("onGenerateData in context"+this.state.productList);
        console.log(product);
        
    }


    // Tạo chuỗi ID ngẫu nhiên
    onGenerateID = ()=>{
        var id = randomstring.generate();
        return id;
    }

    setProductList=(products)=>{
        // console.log("setProductList"+products);
        this.setState({
            productList:products
        })
        
        localStorage.setItem('product',JSON.stringify(products));
    }

    componentDidMount(){
        console.log("componentDidMount");
        // kiểm tra xem localStorage có khác null ko và có lấy đc key ko 
        if(localStorage && localStorage.getItem("product") ) {
            var product = JSON.parse(localStorage.getItem("product"));
            console.log("componentDidMount lần 2 refresh check productList đã lưu data chưa");
            console.log(this.state.productList);
            this.setState({
                productList:this.state.productList.push(product)
            })
            console.log("check type of productList");
            console.log(typeof this.state.productList);
        }
        

    }



    render(){
        // const context = useContext(ProductContext);
        // console.log("check context.productlist");
        // var element = context.productList.map((value)=>{
            // <div className="col-sm-6 col-lg-4 mb-4" >
            //      <div className="block-4 text-center border">
            //          <figure className="block-4-image">
            //              <a href="shop-single.html"><img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid" /></a>
            //          </figure>
            //          <div className="block-4-text p-4">
            //              <h3><Link to="/infoClothe/">{value.name}</Link></h3>
            //              <p className="mb-0">{value.description}</p>
            //              <p className="text-primary font-weight-bold">{value.price}</p>
            //          </div>
            //      </div>
            //  </div>
        // });


        // const {productList} = this.state;
    //     var elementProduct = this.state.productList.map((value,key)=>(
            
    //         <div className="col-sm-6 col-lg-4 mb-4" >
    //             <div className="block-4 text-center border">
    //                 <figure className="block-4-image">
    //                     <a href="shop-single.html"><img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid" /></a>
    //                 </figure>
    //                 <div className="block-4-text p-4">
    //                     <h3><Link to="/infoClothe/">{value.name}</Link></h3>
    //                     <p className="mb-0">{value.description}</p>
    //                     <p className="text-primary font-weight-bold">{value.price}</p>
    //                 </div>
    //             </div>
    //         </div>
    // ));
            
    
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
                        <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Shop</strong></div>
                    </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-9 order-2">
                            <div className="row">
                                <div className="col-md-12 mb-5">
                                <div className="float-md-left mb-4"><h2 className="text-black h5">Shop All</h2> <Button><Link to="/addClothe/">Add</Link></Button>
                                    {/* <ProductContext.Consumer>
                                        {({onGenerateData})=><Button onClick={onGenerateData}>random clothe</Button>}
                                    </ProductContext.Consumer> */}
                                    <Button onClick={this.onGenerateData}>random clothe</Button>
                                </div>
                                <div className="d-flex">
                                    <div className="dropdown mr-1 ml-md-auto">
                                    <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Latest
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <a className="dropdown-item" href="#">Men</a>
                                        <a className="dropdown-item" href="#">Women</a>
                                        <a className="dropdown-item" href="#">Children</a>
                                    </div>
                                    </div>
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                        <a className="dropdown-item" href="#">Relevance</a>
                                        <a className="dropdown-item" href="#">Name, A to Z</a>
                                        <a className="dropdown-item" href="#">Name, Z to A</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Price, low to high</a>
                                        <a className="dropdown-item" href="#">Price, high to low</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            {/* list product */}
                            
                            <div className="row mb-5">
                                {/* {elementProduct} */}
                                {/* {
                                    context.productList.map((value)=>{
                                        <div className="col-sm-6 col-lg-4 mb-4" >
                                            <div className="block-4 text-center border">
                                                <figure className="block-4-image">
                                                    <a href="shop-single.html"><img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid" /></a>
                                                </figure>
                                                <div className="block-4-text p-4">
                                                    <h3><Link to="/infoClothe/">{value.name}</Link></h3>
                                                    <p className="mb-0">{value.description}</p>
                                                    <p className="text-primary font-weight-bold">{value.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                } */}

                                {/* {result} */}

                            </div>
                                
                            {/* end list product */}

                        <div className="row" >
                            <div className="col-md-12 text-center">
                            <div className="site-block-27">
                                <ul>
                                <li><a href="#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 order-1 mb-5 mb-md-0">
                        <div className="border p-4 rounded mb-4">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                            <ul className="list-unstyled mb-0">
                            <li className="mb-1"><a href="#" className="d-flex"><span>Men</span> <span className="text-black ml-auto">(2,220)</span></a></li>
                            <li className="mb-1"><a href="#" className="d-flex"><span>Women</span> <span className="text-black ml-auto">(2,550)</span></a></li>
                            <li className="mb-1"><a href="#" className="d-flex"><span>Children</span> <span className="text-black ml-auto">(2,124)</span></a></li>
                            </ul>
                        </div>
                        <div className="border p-4 rounded mb-4">
                            <div className="mb-4">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                            <div id="slider-range" className="border-primary" />
                            <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled />
                            </div>
                            <div className="mb-4">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
                            <label htmlFor="s_sm" className="d-flex">
                                <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small (2,319)</span>
                            </label>
                            <label htmlFor="s_md" className="d-flex">
                                <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Medium (1,282)</span>
                            </label>
                            <label htmlFor="s_lg" className="d-flex">
                                <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Large (1,392)</span>
                            </label>
                            </div>
                            <div className="mb-4">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
                            <a href="#" className="d-flex color-item align-items-center">
                                <span className="bg-danger color d-inline-block rounded-circle mr-2" /> <span className="text-black">Red (2,429)</span>
                            </a>
                            <a href="#" className="d-flex color-item align-items-center">
                                <span className="bg-success color d-inline-block rounded-circle mr-2" /> <span className="text-black">Green (2,298)</span>
                            </a>
                            <a href="#" className="d-flex color-item align-items-center">
                                <span className="bg-info color d-inline-block rounded-circle mr-2" /> <span className="text-black">Blue (1,075)</span>
                            </a>
                            <a href="#" className="d-flex color-item align-items-center">
                                <span className="bg-primary color d-inline-block rounded-circle mr-2" /> <span className="text-black">Purple (1,075)</span>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="site-section site-blocks-2">
                            <div className="row justify-content-center text-center mb-5">
                            <div className="col-md-7 site-section-heading pt-4">
                                <h2>Categories</h2>
                            </div>
                            </div>
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