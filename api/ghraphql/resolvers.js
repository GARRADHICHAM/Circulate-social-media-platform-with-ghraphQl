
const User = require('../modeles/User');

const Post = require('../modeles/postes');

const bcrypt = require('bcryptjs');




module.exports = {
  Query: {
    async getPost(_, { _id }) {
      return await Post.findById({ _id });
    },
    async listPosts(_, { amount }) {
      return await Post.find({}).sort().limit(amount);
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
    async createPost(_, { postInput: { title, body, tags, author, pathfile } }) {
      const newPost = new Post({
        title: title,
        body: body,
        tags: tags,
        author: author,
        pathfile: pathfile,
        createdAt: new Date().toISOString()
      });

      const res = await newPost.save()

      return {
        id: res.id,
        ...res._doc
      }

    },
    async updatePost(_, { ID, PostInput: { title, text, tags, author } }) {
      const wasUpdated = (await Post.updateOne({ _id: ID }, {
        title: title,
        body: text,
        tags: tags,
        author: author,
        createdAt: new Date().toISOString()
      })).modifiedCount;

      return wasUpdated
    },
    async deletePost(_, { ID }) {
      const wasDeleted = (await Post.deleteOne({ _id: ID })).deletedCount
      return wasDeleted;
    }
  },


};