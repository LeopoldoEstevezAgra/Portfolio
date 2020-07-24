const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.post ('/register', async(req, res) => {
  const credentials = await loadPostColletion();

  await credentials.insertOne({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: "USER",
    createdAt: new Date()
  });

  res.status(201).send();
})

async function loadPostColletion() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://Admin:adminTest@cluster0.zcqwd.mongodb.net/vue-portfolio?retryWrites=true&w=majority', {
    useUnifiedTopology: true
  });
  return client.db('vue-portfolio').collection('auth');
}

module.exports = router;
