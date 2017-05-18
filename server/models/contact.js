var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define the Contact model schema

const ContactSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    index: { unique: true }
  },
  mobile_no: {
    type: String,
    index: { unique: true }
  },
  education: {
    type: String
  },
  address: {
    type: String
  },
  userId: {
    type: String
  }

});


var Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;