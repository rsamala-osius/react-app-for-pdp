var express = require('express')
var app = express()
var Product = require('../schemas/product-schema');
var jwt = require('jsonwebtoken');

app.get('/products', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify(jsonObj.items));
    var token = req.headers['x-access-token'];
    console.log("products token header",token)
    if(token){

      jwt.verify(token, 'supersecrete', function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        
        Product.find({}, function(err, Product) {
          if (err) throw err;
            res.status(200).end(JSON.stringify(Product));          
          }); 
      });      
    }else{
      res.status(401).send({auth: false, "message": "Authentication token is not provided"})
    }
     
});
app.post('/saveproduct', (req, res) => {
//res.setHeader('Content-Type', 'application/json');
// res.end(JSON.stringify(jsonObj.items));
//res.writeHead(200, {'Content-Type': 'text/html'});

 let productModel = new Product(req.body);
  productModel.save().then(function(err){    
    res.send("item saved to database");
  }).catch(err => {
    res.status(400).send("unable to save to database", err);
  });

});

module.exports = app;