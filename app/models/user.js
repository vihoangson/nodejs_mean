var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var UserSchema = new Schema({
	username: {type:String, lowercase:true, required: true,unique:true},
	password: {type:String,required:true},
	email:{type:String,required:true,lowercase:true,unique:true}
});


// `true` means this is a parallel middleware. You **must** specify `true`
// as the second parameter if you want to use parallel middleware.
if(false)
UserSchema.pre('save', true, function(next, done) {

 	var user = this;
 	bcrypt.hash(user.password,null,null,function(err,hash){	 	
		// if(err) return next(err);
		// user.password = hash;
		//next();
 	});
  
});

module.exports = mongoose.model('User',UserSchema);
