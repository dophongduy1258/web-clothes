require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT;
// var homeRouter = require("../backend/routers/home.route");
var productRouter = require("../backend/routers/product.route");
// import Product from'./product.js';
var Product = require('./models/product.model');
var mongoose = require('mongoose');


// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect(process.env.ATLAS_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
// const connection = mongoose.connection;
// connection.once('open',()=>{
//     console.log('MongoDB database connection successfully!!!');
// })

app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello this is clothes page");
});

// app.use('/home',homeRouter);
// app.use('/product',productRouter);
app.post("/create",(req,res)=>{
    const dbClothe = req.body;
    Product.create(dbClothe,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })

})



app.listen(port,()=>{
    console.log(`Connect server // : ${port} successful !!!`);
}).on('error',(error)=>{
    console.log(`Server is disconnected : ${error}`);
});