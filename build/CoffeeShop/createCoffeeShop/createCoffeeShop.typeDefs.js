"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    scalar Upload,\n    type createCoffeeShopResult {\n        ok: Boolean!\n        error: String\n    }\n    type Mutation {\n        createCoffeeShop(\n            name: String!\n            latitude: String!\n            logitude: String!\n            category: [String]!\n            CoffeeShopPhoto: [Upload]\n        ): createCoffeeShopResult\n    }\n"], ["\n    scalar Upload,\n    type createCoffeeShopResult {\n        ok: Boolean!\n        error: String\n    }\n    type Mutation {\n        createCoffeeShop(\n            name: String!\n            latitude: String!\n            logitude: String!\n            category: [String]!\n            CoffeeShopPhoto: [Upload]\n        ): createCoffeeShopResult\n    }\n"])));
var templateObject_1;
