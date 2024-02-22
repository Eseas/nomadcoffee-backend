"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type EditCoffeeShopResult {\n        ok: Boolean!\n        error: String\n        shop: CoffeeShop\n    }\n    type Mutation {\n        editCoffeeShop(\n            id: Int!\n            name: String\n            latitude: String\n            longitude: String\n            category: [String]\n        ): EditCoffeeShopResult\n    }\n"], ["\n    type EditCoffeeShopResult {\n        ok: Boolean!\n        error: String\n        shop: CoffeeShop\n    }\n    type Mutation {\n        editCoffeeShop(\n            id: Int!\n            name: String\n            latitude: String\n            longitude: String\n            category: [String]\n        ): EditCoffeeShopResult\n    }\n"])));
var templateObject_1;
