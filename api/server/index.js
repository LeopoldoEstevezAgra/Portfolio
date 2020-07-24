const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/posts');
const authentication = require('./routes/auth');

app.use('/posts', posts)
app.use('/auth', authentication)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
