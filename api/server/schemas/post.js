var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {type: String,unique: true},
  introduction: {type: String},
  body: {type: String},
  author: {type: String},
  postedAt: {type: Date},
  published: {type: Boolean}
},
  {
    collection: "posts"
  }
);

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
