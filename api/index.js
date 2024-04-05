const mongoose = require('mongoose');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Connection URI
const uri = 'mongodb://localhost:27017/Circulate'; // Replace 'mydatabase' with your database name


const typeDefs = require('./ghraphql/typeDefs')
const resolvers = require('./ghraphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
      origin: "*", // Allow requests from any origin (for development)
    },
});
const app = express();
async function startApolloServer() {
  await server.start();

  // Apply ApolloServer middleware to Express app
  server.applyMiddleware({ app });

  // Connect to MongoDB
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB');
      
      const PORT = 4000;
      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
      });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));
}

startApolloServer();