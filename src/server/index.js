const express = require('express');
const app = express();
// var jsonObj = require('../json/db.json');
const ProductService = require('./services/product-services');
const RegistrationAndLoginService = require('./services/login-registration-services');


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});
app.use("/users", RegistrationAndLoginService);
app.use("/product", ProductService);

app.get('/', function(req, res){
  console.log("dirname", __dirname)
  res.sendfile('index.html', { root: __dirname  } );
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productsdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("created products db");
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});


module.exports = app;







// var http = require('http');
// var jsonObj = require('../json/db.json');

// http.createServer(function (req, res) {
//     // res.writeHead(200, {'Content-Type': 'text/plain'});
//     // res.end('Hello World!');
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(jsonObj.items));
// }).listen(8000);
