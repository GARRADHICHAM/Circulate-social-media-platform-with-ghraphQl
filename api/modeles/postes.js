const { model, Schema } = require('mongoose');



const PostSchema = new Schema({
  id: {
    type: String,
   
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()

  },
  tags: {
    type: String,
    required: true
  },

  pathfile: {
    type: String,

  },
  author: {
    id: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    avatar_path: {
      type: String
    },

    created_at: {
      type: Date,
    },

   },
    likes:{
      id: {
        type: String,
       
      },
      username: {
        type: String,
       
      },
      username: {
        type: String,
        
      },
      avatar_path: {
        type: String
      },
    }
  });

module.exports = model("Post", PostSchema)