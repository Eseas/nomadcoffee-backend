import { gql } from "apollo-server-express";

export default gql`
    type seeCoffeeShopsResult {
        Shops: [CoffeeShop]
    }
    type Query {
        seeCoffeeShops(page: Int!): seeCoffeeShopsResult
    }
`