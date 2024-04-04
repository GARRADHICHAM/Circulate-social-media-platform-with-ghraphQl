const mongoose = require('mongoose');
const  { ApolloServer } = require('apollo-server')

// Connection URI
const uri = 'mongodb://localhost:27017/Circulate'; // Replace 'mydatabase' with your database name


const typeDefs = require('./ghraphql/typeDefs')
const resolvers = require('./ghraphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    return server.listen({port : 5000});
  
  })
  .then((res) => {
    console.log(`server runing at ${res.url}`);
   
  
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
