"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
const graphql_scalars_1 = require("graphql-scalars");
const type_defs_1 = require("./type-defs");
exports.schema = (0, schema_1.mergeSchemas)({
    schemas: [
        (0, schema_1.makeExecutableSchema)({
            typeDefs: graphql_scalars_1.typeDefs,
            resolvers: graphql_scalars_1.resolvers,
        }),
        (0, schema_1.makeExecutableSchema)({ typeDefs: type_defs_1.typeDefs }),
    ],
});
