
const User = require('../modeles/User');

const Post = require('../modeles/postes');





module.exports = {
  Query: {
    async getPost(_, { _id }) {
      return await Post.findById({ _id });
    },
    async listPosts(_, {amount}){
     return await Post.find({}).sort().limit(amount);
    }
  },
  Mutation: {
   async createPost(_, { postInput:{title , text ,tags ,author} }){
      const newPost =  new Post({
        title: title,
        body: text,
        tags: tags,
        author: author,
        createdAt: new Date().toISOString()
      });
      
      const res = await newPost.save()

      return { 
        id: res.id,
        ...res._doc
      }
      
    },
    async updatePost(_, { ID, PostInput:{title , text ,tags ,author} }){
      const wasUpdated = (await Post.updateOne({_id:ID},{  title: title,
        body: text,
        tags: tags,
        author: author,
        createdAt: new Date().toISOString()})).modifiedCount;

        return wasUpdated
    },
    async deletePost(_, { ID}){
      const wasDeleted = (await Post.deleteOne({_id: ID})).deletedCount
      return wasDeleted;
    }
  },

 
};