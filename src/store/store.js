import {createStore} from 'redux';
import apiCaller from '../utils/apiCaller';
import {Cart} from './actions/action';
import myReduce from './reducers/reducer';
import thunk from 'redux-thunk'

    // componentDidMount(){
    //     apiCaller('api/user','GET',null)
    //         .then((res)=>{
    //             userState.push(res.data);
    //         });
    // }
var store = createStore(myReduce,thunk);



// store.dispatch(addToCart());

console.log(store.getState());