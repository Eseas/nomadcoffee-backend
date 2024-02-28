import { gql } from "apollo-server-express";

export default gql`
    type findMyCoffeeshopsResult {
        Shops: [CoffeeShop]
    }
    type Query {
        findMyCoffeeshops(username: String!) : findMyCoffeeshopsResult
    }
`