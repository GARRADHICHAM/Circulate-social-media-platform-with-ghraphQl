
const User = require('../modeles/User');

const Post = require('../modeles/postes');

const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');


module.exports = {
  Query: {
    async getPost(_, { _id }) {
      
      return await Post.findById({ _id });
    },
    async listPosts(_, { amount }) {
      return await Post.find({}).limit(amount);
    },
    async listNew(_, { amount }) {
      return await Post.find({}).sort({ _id: -1 }).limit(amount);
    }
  },
  Mutation: {

    async signUp(_, { userInput: { name,username,email, password } }) {
      // Check if user with the provided email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('Email already exists');
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user record
      const newUser = new User({
        name: name,
        username: username,
        email: email,
        password: hashedPassword,
        created_at: new Date().toISOString(),
        avatar_path:"profile.jpg",
        about:"this is me , and this is my postes collections.",
        phone:" "
      });
      await newUser.save();

      return newUser;
    },
    async signIn(_, { email, password }) {
      // Find the user with the provided email
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      // Verify the provided password against the stored hashed password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }

      return user;
    }
    ,
    async updateUser(_, { _id,  name, username,email, phone, about  }) {
      const wasUpdated = (await User.findByIdAndUpdate({ _id }, {
        name: name,
        username: username,
        email: email,
        phone: phone,
        about: about,
      }));

      return wasUpdated
    },
    async createPost(_, { postInput: { title, body, tags, author, pathfile } }) {
      const newPost = new Post({
        title: title,
        body: body,
        tags: tags,
        author: {
          id:author.id,
          username:author.username,
          avatar_path:author.avatar_path,
          created_at:author.created_at
        },
        pathfile: pathfile,
        created_at: new Date().toISOString()
      });

      const res = await newPost.save()

      return {
        id: res.id,
        ...res._doc
      }

    },
    async updatePost(_, { ID, PostInput: { title, text, tags, author:{id , username , avatar_path} } }) {
      const wasUpdated = (await Post.updateOne({ _id: ID }, {
        title: title,
        body: text,
        tags: tags,
        author: {
          id:id,
          username:username,
          avatar_path:avatar_path
        },
        createdAt: new Date().toISOString()
      })).modifiedCount;

      return wasUpdated
    },
    async deletePost(_, { ID }) {
      const wasDeleted = (await Post.deleteOne({ _id: ID })).deletedCount
      return wasDeleted;
    },
    async likePost(_, { _id, userLiked }){
      try {
        // if(mongoose.Types.ObjectId.isValid(ID)) {
        // Use findByIdAndUpdate to update the document and push the new object to the down_votes array
        const updatedDocument = await Post.findByIdAndUpdate(_id, 
          { $push: { likes: {
            id:userLiked.id,
            username:userLiked.username,
            avatar_path:userLiked.avatar_path} } }, { new: true });

        if (!updatedDocument) {
          throw new Error('Document not found');
        }

        return updatedDocument;
      // }
      } catch (error) {
        throw new Error(`Failed to add down vote: ${error.message}`);
      }
    }
  },


};