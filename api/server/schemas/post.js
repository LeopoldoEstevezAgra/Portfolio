var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {type: String},
  body: {type: String},
  author: {type: String}
},
  {
    collection: "posts"
  }
);

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
