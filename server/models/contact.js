var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define the Contact model schema

const ContactSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
   
  },
  mobile_no: {
    type: String,
    
  },
  education: {
    type: String,
  },
  address: {
    type: String,
  },

});

// ContactSchema.methods = {
//   allContact: function() {

//     User.find({}, function(err, users) {
//       if (err) throw err;

//       // object of all the users
//       console.log(users);
//     });
//     // body...
//   }
// }
var Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;