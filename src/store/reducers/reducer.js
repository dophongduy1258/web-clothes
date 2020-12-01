import Cart from './cart';
import {combineReducers} from 'redux';
import Products from './products'


const myReduce = combineReducers({
    Products,
    Cart // addToCart : addToCart
})


export default myReduce;