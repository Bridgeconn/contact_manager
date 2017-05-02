const mongoose = require('mongoose');

// define the User model schema
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    index: { unique: true }
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
    type: String,
    index: { unique: true }
  },
  address: {
    type: String,
    index: { unique: true }
  },

});

ContactSchema.methods = {

	saveContact: function(contactObj){
		Contact.save(contactObj, function(err, result) {
			if (err){
				console.log(err);
			}
			else {
			    result;
			}
		})
	}
}

var Contact = mongoose.model('Contact', ContactSchema);
