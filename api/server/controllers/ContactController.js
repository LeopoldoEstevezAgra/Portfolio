const Contact = require("../schemas/contact");
module.exports = {
  async addContact (req, res) {
    try{

      const contact = new Contact(req.body);

      contact.postedAt = new Date();

      contact.save(function(err) {
        if (err){
          res.status(400).send({});
        } else {
          res.status(201).send({});
        }
      });
    }catch(err) {
      res.status(400).send();
    }
  }

}
