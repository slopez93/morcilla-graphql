"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
const foods_1 = require("./foods");
const common_1 = require("./common");
exports.schema = (0, schema_1.mergeSchemas)({
    schemas: [common_1.baseSchema, foods_1.foodsSchema],
});
