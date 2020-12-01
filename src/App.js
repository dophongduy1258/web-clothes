import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCartPlus ,FaUser,FaTruck,FaRedoAlt,FaQuestionCircle,FaEnvelope,FaPhoneAlt} from 'react-icons/fa';
import { FiChevronDown,FiHeart } from "react-icons/fi";
import { BiSearch ,BiLogOut} from "react-icons/bi";
import { IoMdPin } from "react-icons/io";
import {
  BrowserRouter as Router,
  Switch,
  Route,Link,History, Redirect
} from "react-router-dom";
import './css/aos.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/owl.theme.default.min.css';
import './css/style.css';
import HomePage from "./components/home.component";
import {CartProvider,CartContext} from "./contexts/cart.js";
import routes from './routers';


export default class App extends Component{
    constructor(props){
        super(props);
        
        var token = localStorage.getItem("token");
        let isLogin = true;

        if(token == null){
            this.setState.isLogin = false
        }else{
            this.setState.isLogin = true
        }


        this.state = {
            token:"",
            isLogin:false,
            userList : []
        }
    }

    componentDidMount(){
        // localStorage.setItem("token",token);
        console.log(this.state.token);
    }


    showRouters = (routes)=>{
        var result = null;
          if(routes.length > 0){
              result = routes.map((route,index)=>{
                  return (
                      <Route
                          key={index}
                          path={route.path} 
                          exact={route.exact} 
                          component={route.main} 
                      />
                  );
              });
          }
        return result;
    }

    onLogout = ()=>{
        console.log('token has remove');
        localStorage.removeItem('token');
        return <Redirect to="/home"/>
    }


  render(){
    return (
        <CartProvider>
            <Router >
          <div className="App">
            {/* home page */}
            {/* <HomePage/> */}
            <div className="site-wrap">
                <header className="site-navbar" role="banner">
                    <div className="site-navbar-top">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                            {/* <form action className="site-block-top-search">
                            <BiSearch/>
                            <input type="text" className="form-control border-0" placeholder="Search" />
                            </form> */}
                        </div>
                        <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                            <div className="site-logo">
                            <a href="index.html" className="js-logo-clone">Shoppers</a>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                            <div className="site-top-icons">
                            <ul>
                                {localStorage.getItem("token")? <li><Link onClick={this.onLogout}><BiLogOut /></Link></li> : <li><Link to="/login/"><FaUser /></Link></li>}
                                <li><a href="#"><FiHeart /></a></li>
                                <li>
                                <Link to="/cart/">
                                    <FaCartPlus />
                                    <CartContext.Consumer>
                                        {({cartItem})=><span className="count">{cartItem.length}</span>}
                                    </CartContext.Consumer>
                                    {/* <span className="count">2</span> */}
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
              </div>
              
            {/* area router */}
            <Switch>
            {this.showRouters(routes)}
                {/* <Route path="/" exact component={HomePage}/>
                <Route path="/product" component={Product}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/cart" component={Cart}/>

                <Route path="/about" component={About}/>
                <Route path="/register" component={Register}/>
                <Route path="/infoClothe" component={Info}/>
                <Route path="/addClothe" component={AddClothe} /> */}
            </Switch>
          </div>
        </Router>
        </CartProvider>
    );
  }
}
