import { gql } from "apollo-server-express"

export default gql`
    type User {
        id : Int!
        firstName: String!
        lastName:String
        username:String!
        email:String!
        bio: String
        avatar: String
        following: [User]
        followers: [User]
        createdAt: String!
        updatedAt: String!
        totalFollowing: Int!
        totalFollowers: Int!
        shops: [CoffeeShop]
        totalShops: Int!
        isFollowing: Boolean!
        isMe: Boolean!
    }
`;