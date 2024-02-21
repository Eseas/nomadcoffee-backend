import { gql } from "apollo-server-express";

export default gql`
    scalar Upload,
    type createCoffeeShopResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        createCoffeeShop(
            name: String!
            latitude: String!
            logitude: String!
            category: [String]!
            CoffeeShopPhoto: [Upload]
        ): createCoffeeShopResult
    }
`