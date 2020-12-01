import { get } from 'jquery';
import { func } from 'prop-types';
import apiCaller from '../../utils/apiCaller';
import * as types from '../actions/actionType'

// var data = [
//     {id:'wnv08jvo',name:'áo khoác',price:'230000'},
//     {id:'243g3vev',name:'áo vest',price:'530000'}
// ];

// var data = JSON.parse(localStorage.getItem('CART'));

// var initialState = data ? data : [];

// var userList = data;

var data = [];
apiCaller('api/Product','GET',null)
            .then(res => {
                data.push(res.data);
                // console.log(res.data); // [{},{}]
                return data;
            });


// async function getData(){
//     var a = await apiCaller('api/Product','GET',null)
//     console.log(a.data); //[{},{},....]
//     data.push(a);
// } 
// getData();

// console.log(data);  //   [[{},{}]]


var initialState = [
    {
        product:{
            _id : "01289780912",
            name:'hoodie',
            price:250000,
            image:'',
            status:true,
            description:'liknwvop98jh23p'
        },quantity : 2
    }
]


var cart = (state = data,action) =>{
    // if(action.type === "Add_To_Cart"){
    //     return state;
    // }
    // // action.type === "Add_To_Cart"? state:[];
    // return state;

    switch(action.type){
        case types.Add_To_Cart :
            console.log(action);
            return [...state];



        default: return [...state]; 

    }

}


export default cart;