"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        seeCategory: function (_, _a, _b) {
            var id = _a.id;
            var client = _b.client;
            var aCategory = client.category.findUnique({
                where: {
                    id: id,
                },
            });
            return {
                category: aCategory
            };
        }
    },
};
exports.default = resolvers;
