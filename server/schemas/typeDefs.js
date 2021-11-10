const { gql } = require('apollo-server-express');



const typeDefs = gql`
type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type User {
    _id: Id
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookSave!): User
    removeBook(bookId: Id!): User
}

type Auth {
    token: Id!
    user: User
}`







module.exports = typeDefs;