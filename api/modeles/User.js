
const {model , Schema } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    
  },
  username: {
    type: String,
    
  },
  email: {
    type: String,
    
   
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