const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors:[String!]
    description:String!
    bookId:ID
    image:String!
    link:String!
    title:String!
  
  }

  type User {
    username:String!
    email:String!
    savedBooks:[Book]
    _id: ID!
  }
  type Auth{
    token:ID!
    user:User
  }
  input databook{
    authors:[String!]
    description:String!
    bookId:ID
    image:String!
    link:String!
    title:String!
  }
  type Query {
   me:User
    
  }

  type Mutation {
    login(email: String!,password: String!,):Auth
    addUser( username:String!, email: String!,password: String!,):Auth
    saveBook(databook:databook!):User
    removeBook(bookId:ID):User
    
  }
`;

module.exports = typeDefs;
