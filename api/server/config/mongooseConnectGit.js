const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://user:pass@cluster0.zcqwd.mongodb.net/vue-portfolio?retryWrites=true&w=majority",
  {
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

module.exports = mongoose;


