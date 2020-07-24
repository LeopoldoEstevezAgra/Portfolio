const mongoose = require('mongoose');
const User = require('../schemas/user')
const bcrypt = require('bcrypt')

mongoose.connect("mongodb+srv://Admin:adminTest@cluster0.zcqwd.mongodb.net/vue-portfolio?retryWrites=true&w=majority",
  {
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex: true
  });


module.exports = {
  async register (req, res) {
    try{

      const user = new User(req.body);
      let hash = bcrypt.hashSync(user.password, 10);
      user.password = hash

      user.save(function(err) {
        if (err) throw err;
      });

      res.status(201).send();
    }catch(err) {
      console.log(err)
      res.status(400).send();
    }
  }
}
