import { gql } from "apollo-server-express";

export default gql`
    type EditCoffeeShopResult {
        ok: Boolean!
        error: String
        shop: CoffeeShop
    }
    type Mutation {
        editCoffeeShop(
            id: Int!
            name: String
            latitude: String
            longitude: String
            category: [String]
        ): EditCoffeeShopResult
    }
`