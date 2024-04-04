const {model , Schema } = require('mongoose');





const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  
  author: {
    type: String,
    required: true
  },
 
  date: {
      type: Date,
      default: Date.now()
    ,
   
  }
});

module.exports = model("Post", PostSchema)