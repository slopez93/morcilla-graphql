"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
const common_1 = require("../common");
const resolvers_1 = require("./resolvers");
const type_defs_1 = require("./type-defs");
exports.schema = (0, schema_1.mergeSchemas)({
    schemas: [common_1.baseSchema],
    typeDefs: type_defs_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
