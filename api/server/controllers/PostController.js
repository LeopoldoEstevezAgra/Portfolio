const Post = require("../schemas/post");
const config = require("../config/config");
const mongoose = require("../config/mongooseConnect")

module.exports = {
  async getPosts (req, res) {
    try {

      var posts = await Post.find({});
      var isAuthorized = req.body.isAuthorized;

      if (isAuthorized) {
        res.status(200).send({
          posts
        })
      } else {
        res.stposts(401).send()
      }
    } catch (err) {

    }
  },
  async deleteItem (req, res) {
    await Post.deleteOne({ _id: req.body.id }, function (err) {
      if (err) {
        res.status(400).send({});
      } else {
        res.status(200).send({});
      }
    });
  },
  async updateItem (req, res) {
    try {
      await Post.updateOne({ _id: req.body.id }, {
        title: req.body.title,
        body: req.body.body,
      },function(err){
        if (err) {
          res.status(400).send({});
        } else {
          res.status(200).send({});
        }
      });
    } catch(err) {
      console.log(err)
    }
  },
  async addPost (req, res) {
    try{

      const post = new Post(req.body);

      post.save(function(err) {
        if (err){
          res.status(400).send({});
        } else {
          res.status(201).send({});
        }
      });
    }catch(err) {
      res.status(400).send();
    }
  }

}
