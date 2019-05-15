var mongoose = require('mongoose');

// Member Schema
var MemberSchema = mongoose.Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  address: [{
    city:{type: String},
    state:{type: String},
    zip:{type: String}
  }],
  username: {
    type: String
  },
  email: {
    type: String
  }
});

module.exports = mongoose.model('Member', MemberSchema);


