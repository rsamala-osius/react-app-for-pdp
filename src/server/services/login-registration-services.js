var express = require("express");
var app = express();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

//var Login = require("../schemas/login-registration-schema");
var Registration = require("../schemas/login-registration-schema");

app.post("/authenticate", (req, res) => {
   res.setHeader('Content-Type', 'application/json');
   var username =  req.param('username');
   var password =  req.param('password');
   
   var userIdQuery =  Registration.find({username:username}).select();
   var registratinQuery =  Registration.find({username:username, password: password}).select();
   userIdQuery.exec( (err, User)=>{
    if (err) throw err;
       if( User.length){
            registratinQuery.exec( function(err, Registration) {
                if (err) throw err;
                if(Registration.length){
                      var token = jwt.sign({ id: Registration[0]._id }, "supersecrete", {
                        expiresIn: 86400 // expires in 24 hours
                      });                      
                    res.end(JSON.stringify({username:Registration[0].username, token}));
                }else{
                    res.status(500).send({ error: "user name and password doesnt match" });
                }     
            });  
       }else{
        res.status(500).send({ error: "user not exist " });;
       }
   })
})
app.post("/register", (req, res) => {
   res.setHeader('Content-Type', 'application/json');
  
  var RegistrationModel = new Registration(req.body);
  RegistrationModel.save().then( () => {
    res.setHeader('Content-Type', 'application/json');
    res.send({"status": "success"});
  }).catch( ()=> {
    res.send({"status": "failure"});
  })
})

module.exports = app;