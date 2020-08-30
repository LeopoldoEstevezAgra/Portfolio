var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  email: {type: String},
  name: {type: String},
  company: {type: String},
  note: {type: String},
  postedAt: {type: Date},
},
  {
    collection: "contacts"
  }
);

var Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
