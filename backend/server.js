require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT;
// var homeRouter = require("../backend/routers/home.route");
var apiRouter = require('./routers/api.route');
// import Product from'./product.js';
var ProductModel = require('./models/product.model');
var mongoose = require('mongoose');
app.use(express.json());
app.use(cors());
// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});

// web mongodb
// const connection_url = "mongodb+srv://admin:QBQ1lbfxuCficcRI@cluster0.fyb3g.mongodb.net/webClothedb?retryWrites=true&w=majority";


// mongoose.connect("mongodb://localhost/clothe-db",{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// });
mongoose.connect('mongodb://localhost/clothe-db', {useNewUrlParser: true});
mongoose.connection.on('connected',()=>{
    console.log('MongoDB database connection successfully!!!');
});
// app.get("/",(req,res)=>{
//     res.send("hello this is clothes page");
// });

// app.post("/add",(req,res)=>{
//     const dbClothe = req.body;
//     console.log(dbClothe);
//     ProductModel.create(dbClothe,(err,data)=>{
//         if(err){
//             res.status(500).send(err);
//         }else{
//             res.status(201).send(`new clothes create : ${data}`);
//         }
//     })

// })

app.use('/api',apiRouter);


app.listen(port,()=>{
    console.log(`Connect server // : ${port} successful !!!`);
}).on('error',(error)=>{
    console.log(`Server is disconnected : ${error}`);
});