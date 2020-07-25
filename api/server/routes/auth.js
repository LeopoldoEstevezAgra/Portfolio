const AuthController = require("../controllers/AuthController")
const AuthControllerPolicy = require ('../policies/AuthControllerPolicy')
const express = require('express');

const router = express.Router();

router.post ('/register',
  AuthControllerPolicy.register,
  AuthController.register)

router.post ('/login',
  AuthController.login)

module.exports = router;