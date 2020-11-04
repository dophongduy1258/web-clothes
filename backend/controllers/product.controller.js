var Product = require('../models/product.model');

module.exports.Product = (req,res)=>{
    Product.find()
        .then(products => res.json(products))
        .catch(err =>res.status(400).json('Error : '+err) );

}


module.exports.postCreateProduct = (req,res)=>{
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var description = req.body.description;

    const newProduct = new Product({name,price,image,description});
    newProduct.save()
        .then(() => res.json("Product added"))
        .catch(err =>res.status(400).json('Error : '+err) );
    
}
