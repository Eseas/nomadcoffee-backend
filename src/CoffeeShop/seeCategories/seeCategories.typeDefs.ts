import { gql} from "apollo-server-express";

export default gql`
    type SeeCategoriesResult {
        categories: [Category]
    }
    type Query {
        seeCategories(page: Int!): SeeCategoriesResult
    }
`