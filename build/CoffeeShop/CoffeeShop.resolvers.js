"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    CoffeeShop: {
        user: function (_a, _, _b) {
            var userId = _a.userId;
            var client = _b.client;
            return client.user.findUnique({ where: { id: userId } });
        }, // End : User
        photos: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.coffeeShopPhoto.findMany({
                where: {
                    shop: {
                        id: id
                    }
                }
            });
        }, // End : photos
        categories: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.category.findMany({
                where: {
                    shops: {
                        some: {
                            id: id,
                        },
                    },
                },
            });
        } // End : categories
    },
    Category: {
        totalShops: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            console.log(id);
            return client.coffeeShop.count({ where: {
                    categories: {
                        some: {
                            id: id,
                        }
                    }
                } });
        }, // End: totalShops
    }
};
exports.default = resolvers;
