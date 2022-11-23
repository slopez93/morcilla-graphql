"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        async foods() {
            return Promise.resolve([{ id: "1", name: "food 1", url: "url" }]);
        },
    },
};
