"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        async foods(_root, _args, { services: { foodsService } }) {
            return await foodsService.getFoods();
        },
    },
};
