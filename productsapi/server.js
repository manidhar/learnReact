var express=require('express');
const req = require('express/lib/request');
var bodyParser=require('body-parser');
var cors = require('cors');

var app= express();
// body parsers should be written first
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors({
    "Access-Control-Allow-Origin": '*'
}));
var productApi=require('./controllers/productController');
app.use("/api/products",productApi);


app.listen(8080);
console.log("Server up and running on 8080");