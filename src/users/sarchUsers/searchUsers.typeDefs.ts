import { gql } from "apollo-server-express";

export default gql`
    type SearchUsersResult {
        Users: [User]
        totalPages: Int
    }
    type Query {
        searchUsers(keyword: String!, page: Int!): SearchUsersResult!
    }
`