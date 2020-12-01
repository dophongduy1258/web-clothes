import * as types from './actionType';
import apiCaller from './../../utils/apiCaller'

export const addToCart = (product,quantity)=>{
    return {
        type: types.Add_To_Cart,
        product,
        quantity
    }
}

export const getProduct = ()=>{

    return (dispatch)=>{
        dispatch(addToCart)
        apiCaller('api/Product','GET',null)
        .then(res=>{
            const products = res.data
            dispatch(addToCart)
        })
    }
}