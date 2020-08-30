const Contact = require("../schemas/contact");
module.exports = {
  async getContacts (req, res) {
    try {

      var contacts = await Contact.find({});
      var isAuthorized = req.body.isAuthorized;

      if (isAuthorized) {
        res.status(200).send({
          contacts
        })
      } else {
        res.stposts(401).send()
      }
    } catch (err) {

    }
  },
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
