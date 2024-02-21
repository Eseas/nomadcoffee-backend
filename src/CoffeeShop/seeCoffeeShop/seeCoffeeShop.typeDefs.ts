import { gql } from "apollo-server-express";

export default gql`
    type seeCoffeeShopResult {
        Shop: CoffeeShop
    }
    type Query {
        seeCoffeeShop(id: Int!): CoffeeShop
    }
`