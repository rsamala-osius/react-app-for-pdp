var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RegistrationSchema = new Schema({
  "firstName": String,
  "lastName": String,
  "password":String,
  "username":String  
});
var Registration = mongoose.model("Registration", RegistrationSchema);

module.exports = Registration;