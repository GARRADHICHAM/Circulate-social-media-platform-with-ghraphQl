
const {model , Schema } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },

  about: {
    type: String,
    
  },
  avatar_path: {
    type: String,
    
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
   
  },
  
created_at: {
    type: Date,
    default: Date.now()
 
}
  
 
  
});

module.exports = model("User", UserSchema)