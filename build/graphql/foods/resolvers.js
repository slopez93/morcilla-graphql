"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        async foods(_root, _args, { services: { foodsService } }) {
            try {
                return await foodsService.getFoods();
            }
            catch (error) { }
        },
    },
    Mutation: {
        async food(root, { name, image }, { services: { foodsService } }) {
            try {
                return await foodsService.addFood({ name, image });
            }
            catch (error) { }
        },
    },
};
