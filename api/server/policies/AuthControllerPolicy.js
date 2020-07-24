const Joi = require('joi');

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      username: Joi.string(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      email: Joi.string().email(),
    })

    const {error, value} = schema.validate(req.body);

    if(error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Error on email'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Error on password'
          })
          break
        default:
          res.status(400).send({
            error: 'An error has occurred'
          })
          break
      }
    }
    else {
      next()

    }
  }
}
