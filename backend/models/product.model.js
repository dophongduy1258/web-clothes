var mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    image:String,
    description:String,
});

var Product = mongoose.model('Product',productSchema,'products');
module.exports= Product; 
// export default mongoose.model('product',productSchema)