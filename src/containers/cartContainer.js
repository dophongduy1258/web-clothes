import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import { FiChevronDown,FiHeart } from "react-icons/fi";
import { FaCartPlus ,FaUser,FaTruck,FaRedoAlt,FaQuestionCircle,FaEnvelope,FaPhoneAlt} from 'react-icons/fa';
import { BiSearch } from "react-icons/bi";
import { IoMdPin } from "react-icons/io";
import { Button } from 'reactstrap';


class CartContainer extends Component{
    render(){
        
        var {cart} = this.props;
        return(
            <div></div>
        )
    }
}






// CartContainer.propTypes={
//     cart : PropTypes.arrayOf(PropTypes.shape({
//         product: PropTypes.shape({
//             _id : PropTypes.number.isRequired,
//             name : PropTypes.string.isRequired,
//             price : PropTypes.number.isRequired,
//             image : PropTypes.string.isRequired,
//             status : PropTypes.string.isRequired,
//             description : PropTypes.string.isRequired
//         }),isRequired,
        
//         quantity: PropTypes.number.isRequired
//     })),isRequired
// }


const mapStateToProps = state =>{
    return {
        cart:state.Cart  //reducer.js
    }
}


export default connect(mapStateToProps,null)(CartContainer);

