"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Query: {
        seeCoffeeShops: function (_, _a, _b) {
            var page = _a.page;
            var client = _b.client;
            var aCoffeeShops = client.CoffeeShop.findMany({
                take: 5,
                skip: (page - 1) * 5,
            });
            return {
                Shops: aCoffeeShops,
            };
        }
    }
};
