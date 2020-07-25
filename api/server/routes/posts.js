const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async(req, res) => {
  const posts = await loadPostColletion();

  res.send(await posts.find({}).toArray());
});

//Add Posts
router.post('/', async(req, res) => {
  const posts = await loadPostColletion();

  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });

  res.status(201).send();

});

router.delete('/:id', async (req, res) => {
  const posts = await loadPostColletion();
  await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});

  res.status(200).send();
});


async function loadPostColletion() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://Admin:adminTest@cluster0.zcqwd.mongodb.net/vue-portfolio?retryWrites=true&w=majority', {
    useUnifiedTopology: true
  });
  return client.db('vue-portfolio').collection('posts');
}

module.exports = router;
