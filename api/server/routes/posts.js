const PostController = require("../controllers/PostController")
const express = require('express');

const router = express.Router();

router.post ('/',
  PostController.getPosts)

router.delete ('/',
  PostController.deleteItem)

router.put ('/',
  PostController.updateItem)

router.post ('/post',
  PostController.addPost)

module.exports = router;
