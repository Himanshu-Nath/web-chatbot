var express = require('express');
var registereduser = require( '../model/registereduser');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var RegisteredUsers = mongoose.model('registeredusers');

//Find Registered User
exports.getRegistereduser = function(req, res){
    var user = req.body;
    console.log("User data "+user.name);
    console.log("User email "+user.email);
    
    if(user.email != undefined){
        RegisteredUsers.find({"firstName": user.name, "email": user.email}, function(err, result) {
            if (err) return console.error(err);
            if(result != null && result.length != 0) {
                console.log(result);
                res.send({status : true, result});
            }
            else
                res.send({status:false});

        });
    } else {
        RegisteredUsers.find({"firstName": user.name}, function(err, result) {
            if (err) return console.error(err);
            if(result != null && result.length != 0) {
                console.log(result);
                res.send({status : true, result});
            }
            else
                res.send({status:false});

        });
    }
}

//Send Friend Request
exports.sendFriendRequest = function(req, res){
    var user = req.body;
    console.log("User data "+user.id);
    console.log("User email "+user.reqId);
    
    RegisteredUsers.update({"userId": user.reqId}, {$push : {invitations : user.id}}, function(err, result) {
        if (err) return console.error(err);
        if(result != null && result.length != 0) {
            console.log(result);
            res.send({status : true});
        }
        else
            res.send({status:false});

    });
}