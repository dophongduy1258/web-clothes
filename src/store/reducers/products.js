
import apiCaller from '../../utils/apiCaller';

var data = [{image:'https://images-na.ssl-images-amazon.com/images/I/61RDK1DgjDL._AC_UX569_.jpg',name:'dress',description:'uweqnbfvclkenw',price:200000}];
// var a = apiCaller('api/Product','GET',null)
//             .then((res)=>{
//                 data = res.data;
//             });
// console.log(a);

var products = (state = data,action)=>{
    switch(action.type){
        
        default : return [...state];
    }
};

export default products;




