var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {type: String},
  password: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  role: {type: String}
},
  {
    collection: 'auth'
  }
);

var User = mongoose.model('User', UserSchema);
module.exports = User;
