"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processCategories = void 0;
var processCategories = function (caption) {
    var _a;
    var slug = (_a = caption
        .match(/[^\s]+/g)) === null || _a === void 0 ? void 0 : _a.join('-').toLowerCase();
    return {
        where: {
            name: caption
        },
        create: {
            name: caption,
            slug: slug,
        }
    };
};
exports.processCategories = processCategories;
