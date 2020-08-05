const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/posts');
const authentication = require('./routes/auth');
const projects = require('./routes/projects');

app.use('/posts', posts)
app.use('/auth', authentication)
app.use('/projects', projects)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'))

  app.get(/.*/,(req, res) => res.sendFile('/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
