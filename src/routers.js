import React from 'react';
import HomePage from "./components/home.component";
import Contact from "../src/components/contact.component";
import Cart from "../src/components/cart.component";
import Product from "../src/components/product.component";
import About from "../src/components/about.component";
import Register from "../src/components/register.component";
import Login from "../src/components/login.component";
import UserList from '../src/components/userList.component';
import EditUser from '../src/components/editUser.component';
import Info from "../src/components/infoClothe.component";
import AddClothe from "../src/components/addClothe.component";
import ProductList from '../src/components/productList.component';
import EditProduct from '../src/components/editProduct.component';



const routes = [
    {
        path:'/',
        exact:true,
        main: () => <HomePage/>
    },
    {
        path:'/product',
        exact:false,
        main:()=><Product/>
    },
    {
        path:'/contact',
        exact:false,
        main:()=><Contact/>
    },
    {
        path:'/cart',
        exact:false,
        main:()=><Cart/>
    },
    {
        path:'/about',
        exact:false,
        main:()=><About/>
    },
    {
        path:'/register',
        exact:false,
        main:({history})=><Register history={history}/>
    },
    {
        path:'/login',
        exact:false,
        main:()=><Login/>
    },
    {
        path:'/userList',
        exact:false,
        main:({history})=><UserList history={history}/>
    },
    {
        path:'/:id/editUser',
        exact:false,
        main:({match,history})=><EditUser history={history} match={match}/>
    },
    {
        path:'/infoClothe',
        exact:false,
        main:()=><Info/>
    },
    {
        path:'/addClothe',
        exact:false,
        main:({history})=><AddClothe history={history}/>
    },
    {
        path:'/productList',
        exact:false,
        main:({history})=><ProductList history={history}/>
    },
    {
        path:'/:id/editProduct',
        exact:false,
        main:({match,history})=><EditProduct history={history} match={match}/>
    },
]
export default routes;

