var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "id": Number,
    "productUrl": String,
    "name": String,
    "brandname": String,
    "productname": String,
    "brand": String,
    "primaryImage": String,
    "price": String,
    "productName": String,
    "productDescription": String,
    "color": String,
    "size": [Number],
    "qty": [Number],
    "stock": String,
    "details": [String]
  });

  var Product =  mongoose.model('Product', productSchema);

  module.exports = Product;