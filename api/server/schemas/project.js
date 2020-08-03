var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: {type: String,unique: true},
  introduction: {type: String},
  repository: {type: String},
  link: {type: String},
  author: {type: String},
  postedAt: {type: Date},
  featured: {type: Boolean}
},
  {
    collection: "projects"
  }
);

var Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
