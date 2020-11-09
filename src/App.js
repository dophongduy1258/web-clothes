import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/aos.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/owl.theme.default.min.css';
import './css/style.css';

import HomePage from "./components/home.component";
// import Contact from "../src/components/contact.component";
// import Cart from "../src/components/cart.component";
// import Product from "../src/components/product.component";
// import About from "../src/components/about.component";
// import Register from "../src/components/register.component";
// import Info from "../src/components/infoClothe.component";
// import AddClothe from "../src/components/addClothe.component";

import routes from './routers';


export default class App extends Component{

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

  render(){
    return (
        <Router >
          <div className="App">
            {/* home page */}
            {/* <HomePage/> */}


              
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
    );
  }
}
