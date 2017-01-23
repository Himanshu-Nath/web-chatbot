var express = require('express');
var user = require( '../model/user');
var registereduser = require( '../model/registereduser');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Users = mongoose.model('users');
var RegisteredUsers = mongoose.model('registeredusers');

//Register User
exports.registerUser = function(req, res){
    console.log(req.body);
    var user = req.body;
    var userId;
    var email = user.email;
    
    var user = new Users({
        firstName: user.firstName,
        lastName : user.lastName,
        username : user.username,
        password : user.password,
        status : "Active",
        token : user.token,
        active : "Offline"
    });    
    
    user.save(function(err, result){
        userId = result._id;
        console.log("result : "+userId);
        if(err){
            response.errorMsg = err;
            res.send(response);
        }else{
            
            console.log("firstName : "+user.firstName);
            var registerUser = new RegisteredUsers({
                firstName: user.firstName,
                lastName : user.lastName,
                userId : userId,
                email : email,
                token : user.token,
                active : "Offline"
            });          
            registerUser.save(function(err, result){});          
        res.send({status:true});
      }
    });
}

//Login User
exports.loginUser = function(req, res){
    var user = req.body;
    
    Users.findOne({"username": user.username, "password": user.password, "token": user.token}, function(err, result) {
        if (err) return console.error(err);
        if(result != null && result.length != 0) {
            console.log(result);
            console.log(result.token);
            res.send({status : true, result});
        }
        else
            res.send({status:false});
        
    });    
}