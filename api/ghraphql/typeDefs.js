const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  
  type Post {
    id: ID!
    title: String
    body: String
    tags:String
    author:String
  }

  input PostInput{
    title: String
    body: String
    tags:String
    author:String
  }


  type Query {
    listPosts(amount:Int): [Post]
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(postInput: PostInput): Post!
    updatePost(id: ID!, title: String, text: String): String
    deletePost(id: ID!): String
  }
`;

module.exports = typeDefs;