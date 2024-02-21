import {gql} from "apollo-server-express";

export default gql`
    type seeCategoryResult {
        category: Category
    }
    type Query {
        seeCategory(id: Int!): seeCategoryResult
    }
`