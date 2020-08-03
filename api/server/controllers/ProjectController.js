const Project = require("../schemas/project");

module.exports = {
  async getProjects (req, res) {
    try {

      var projects = await Project.find({});
      var isAuthorized = req.body.isAuthorized;

      if (isAuthorized) {
        res.status(200).send({
          projects
        })
      } else {
        res.stposts(401).send()
      }
    } catch (err) {

    }
  },
  async getFeaturedProjects (req, res) {
    try {
      Project.find({featured: true}).limit(5).sort('-postedAt').exec(function(err, projects) {
        if(err) {
          res.status(400).send({});
        } else {
          res.status(200).send({
            projects
          });
        }
      });

    } catch (err) {
      res.status(400).send({});
    }
  },
  async getProjectDetail (req, res) {
    try {
      const title = req.body.title
      await Project.findOne({"title": title},function (err, project){
        if (err) {
          return handleError(err);
        }else{
          res.status(200).send({project});

        }
      }).lean();

     }catch(err) {
      console.log(err);
      res.status(500).send();

    }
  },
  async deleteItem (req, res) {
    await Project.deleteOne({ _id: req.body.id }, function (err) {
      if (err) {
        res.status(400).send({});
      } else {
        res.status(200).send({});
      }
    });
  },
  async updateItem (req, res) {
    try {
      await Project.updateOne({ _id: req.body.id }, {
        title: req.body.title,
        author: req.body.author,
        introduction: req.body.introduction,
        body: req.body.body,
        link: req.body.link,
        repository: req.body.repository,
        featured: req.body.featured,
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
  async addProject (req, res) {
    try{
      const project = new Project(req.body);

      project.postedAt = new Date();

      project.featured = false;

      project.save(function(err) {
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
