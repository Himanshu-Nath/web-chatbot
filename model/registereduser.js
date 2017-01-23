var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var RegisteredUserSchema = new Schema({
	userId	: String,
    firstName : String,
    lastName : String,
    token : String,
    friends : [],
	invitations : [],
	active : String,
	fav : [],
	block : [],
    email : String
});
mongoose.model('registeredusers', RegisteredUserSchema);