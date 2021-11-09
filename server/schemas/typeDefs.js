const { gql } = require('apollo-server-express');



const typeDefs = gql`
type Book {
    bookId: String,
    authors: [String],
    description: String,
    title: String.
    image: String,
    link: String

},

type User {
    _id: Id,
    username: String,
    email: String,
    bookCount: Int,
    savedBooks: [Book]
}`;







module.exports = typeDefs