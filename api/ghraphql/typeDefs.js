const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  scalar Date
  type Post {
    _id:String
    title: String
    body: String
    tags:String
    author:UserPost
    pathfile:String
    created_at:Date

  }

  type User {
    _id:String
    name: String
    username: String
    email:String
    password:String
    avatar_path:String
    phone:String
    about:String
    created_at:Date
    
  }
  type UserPost {
      id:String
      username:String
      avatar_path:String
      created_at:Date

    
  }

  input UserInput{
    name: String
    username: String
    email:String
    password:String
  
  }

  input userCreate{
   
      id:String
      username:String
      avatar_path:String
      created_at:Date

  
  }
  input PostInput{
    title: String
    body: String
    tags:String
    author:userCreate
    pathfile:String
  }


  type Query {
    listPosts(amount:Int): [Post]
    listNew(amount:Int): [Post]
    getPost(_id: String!): Post
    getUser(id: ID!): Post
  }

  type Mutation {
    signUp(userInput:UserInput): User!
    signIn(email: String!, password: String!): User
    createPost(postInput: PostInput): Post
    updateUser(_id: String!, name: String, username: String , email:String ,phone:String ,about:String): User
    likePost(_id: String!,userLiked:userCreate ): Post
    updatePost(id: ID!, title: String, text: String): String
    deletePost(id: ID!): String
  }
`;

module.exports = typeDefs;