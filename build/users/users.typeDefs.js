"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type User {\n        id : Int!\n        firstName: String!\n        lastName:String\n        username:String!\n        email:String!\n        bio: String\n        avatar: String\n        following: [User]\n        followers: [User]\n        createdAt: String!\n        updatedAt: String!\n        totalFollowing: Int!\n        totalFollowers: Int!\n        shops: [CoffeeShop]\n        totalShops: Int!\n        isFollowing: Boolean!\n        isMe: Boolean!\n    }\n"], ["\n    type User {\n        id : Int!\n        firstName: String!\n        lastName:String\n        username:String!\n        email:String!\n        bio: String\n        avatar: String\n        following: [User]\n        followers: [User]\n        createdAt: String!\n        updatedAt: String!\n        totalFollowing: Int!\n        totalFollowers: Int!\n        shops: [CoffeeShop]\n        totalShops: Int!\n        isFollowing: Boolean!\n        isMe: Boolean!\n    }\n"])));
var templateObject_1;
