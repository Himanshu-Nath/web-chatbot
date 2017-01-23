var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
    firstName : String,
    lastName : String,
    username : String,
    password : String,
    status : String,
    token : String,
    active : String
});
mongoose.model('users', UserSchema);