const ContactController = require("../controllers/ContactController")
const express = require('express');

const router = express.Router();

router.post ('/',
  ContactController.addContact)

module.exports = router;
