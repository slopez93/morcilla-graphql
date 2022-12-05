import { mergeSchemas } from "@graphql-tools/schema";
import { baseSchema } from "../common";
import { foodsSchema } from "../foods";
import { resolvers } from "./resolvers";
import { typeDefs } from "./type-defs";

export const schema = mergeSchemas({
  schemas: [baseSchema, foodsSchema],
  typeDefs,
  resolvers,
});
