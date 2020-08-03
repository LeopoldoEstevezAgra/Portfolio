const ProjectController = require("../controllers/ProjectController")
const express = require('express');

const router = express.Router();

router.post ('/',
  ProjectController.getProjects)

router.post ('/detail',
  ProjectController.getProjectDetail)

router.get ('/',
  ProjectController.getFeaturedProjects)

router.delete ('/',
  ProjectController.deleteItem)

router.put ('/',
  ProjectController.updateItem)

router.post ('/project',
  ProjectController.addProject)

module.exports = router;
