const mongoose = require('mongoose');
const User = require('../schemas/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config');

mongoose.connect("mongodb+srv://Admin:adminTest@cluster0.zcqwd.mongodb.net/vue-portfolio?retryWrites=true&w=majority",
  {
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

function jwtSignUser (user) {
  const ONE_DAY = 60 * 60 * 24
  return jwt.sign(user,config.authentication.jwtSecret ,{
    expiresIn: ONE_DAY
  })
}

module.exports = {
  async getUsers (req, res) {
    try {

      console.log(req.body)
      var users = await User.find({});
      var isAuthorized = req.body.isAuthorized;

      if (isAuthorized) {
        res.status(200).send({
          users
        })
      } else {
        res.status(401).send()
      }
    } catch (err) {

    }
  },
  async register (req, res) {
    try{

      const user = new User(req.body);
      let hash = bcrypt.hashSync(user.password, 10);
      user.password = hash
      user.role = "USER"

      user.save(function(err) {
        if (err) throw err;
      });

      res.status(201).send({
      });

    }catch(err) {
      res.status(400).send();
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body;

      const user = await User.findOne({"email": email},function (err, user){
        if (err) {
          return handleError(err);
        }else{

        }
      }).lean();

      bcrypt.compare(password, user.password, function(err, result) {
        if(err) {
          res.status(500).send({
            error: "An error has occurred"
          })
        }else if(result) {
          res.status(200).send({
            message: "Found and matched",
            user,
            token: jwtSignUser(user)
          })
        }else{
          res.status(403).send({
            error: "Incorrect credentials"
          })
        }
      })

    }catch(err) {
      console.log(err);
      res.status(500).send();

    }
  }
}
