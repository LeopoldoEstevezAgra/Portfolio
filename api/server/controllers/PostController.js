const Post = require("../schemas/post");

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
  async getLastPosts (req, res) {
    try {
      Post.find({published: true}).limit(5).sort('-postedAt').exec(function(err, posts) {
        if(err) {
          res.status(400).send({});
        } else {
          res.status(200).send({
            posts
          });
        }
      });

    } catch (err) {
      res.status(400).send({});
    }
  },
  async getPostDetail (req, res) {
    try {
      const title = req.body.title
      await Post.findOne({"title": title},function (err, post){
        if (err) {
          return handleError(err);
        }else{
          res.status(200).send({post});

        }
      }).lean();

     }catch(err) {
      console.log(err);
      res.status(500).send();

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
        author: req.body.author,
        introduction: req.body.introduction,
        body: req.body.body,
        published: req.body.published,
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

      post.postedAt = new Date();

      post.published = false;

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
