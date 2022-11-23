"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
const schema_2 = require("../../graphql/common/schema");
const resolvers_1 = require("./resolvers");
const typeDefs_1 = require("./typeDefs");
exports.schema = (0, schema_1.mergeSchemas)({
    schemas: [schema_2.bschema],
    typeDefs: typeDefs_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
