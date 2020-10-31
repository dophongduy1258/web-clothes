require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;
var homeRouter = require("../backend/routers/home.route");

// var mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});

app.get("/",(req,res)=>{
    res.send("hello this is clothes page");
});

app.use('/home',homeRouter);



app.listen(port,()=>{
    console.log(`Connect server // : ${port} successful !!!`);
}).on('error',(error)=>{
    console.log(`Server is disconnected : ${error}`);
});