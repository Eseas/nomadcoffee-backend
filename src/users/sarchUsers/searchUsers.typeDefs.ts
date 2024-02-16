import { gql } from "apollo-server-express";

export default gql`
    type SearchUsersResult {
        ok: Boolean!
        error: String!
        Users: [User]
        totalPages: Int
    }
    type Query {
        searchUsers(keyword: String!, lastId: Int!): SearchUsersResult!
    }
`