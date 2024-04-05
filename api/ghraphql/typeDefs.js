const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  
  type Post {
    id: ID!
    title: String
    body: String
    tags:String
    author:User
    pathfile:String
    
    
  }

  type User {
    id: ID!
    name: String
    username: String
    email:String
    password:String
    avatar_path:String
    phone:String
    about:String
    
    
  }

  input UserInput{
    name: String
    username: String
    email:String
    password:String
  
  }

  input PostInput{
    title: String
    body: String
    tags:String
    author:String
    pathfile:String
  }


  type Query {
    listPosts(amount:Int): [Post]
    getPost(id: ID!): Post
    getUser(id: ID!): Post
  }

  type Mutation {
    signUp(userInput:UserInput): User!
    signIn(email: String!, password: String!): User
    createPost(postInput: PostInput): Post!
    updatePost(id: ID!, title: String, text: String): String
    deletePost(id: ID!): String
  }
`;

module.exports = typeDefs;