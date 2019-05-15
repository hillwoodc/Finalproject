var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var MemberSchema = mongoose.Schema({
	username: {
		type: String
	},
	email: {
		type: String
	},
	password:{
		type:String,
		bcrypt: true
	},
	type:{
		type:String
	}
	
});

var User = module.exports = mongoose.model('Member', MemberSchema);

// Get User By Id
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

// Get User by Username
module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

// Compare password
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch){
		if(err) throw err;
		callback(null, isMatch);
	});
}

// Create Member
module.exports.saveUser = function(newUser, newMember, callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw errl
		// Set hash
		newUser.password = hash;
		console.log('Member is being saved');
		async.parallel([newUser.save, newMember.save], callback);
	});
}

