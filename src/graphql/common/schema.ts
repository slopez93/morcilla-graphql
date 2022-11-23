import { makeExecutableSchema, mergeSchemas } from "@graphql-tools/schema";
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from "graphql-scalars";

import { typeDefs } from "./type-defs";

export const schema = mergeSchemas({
  schemas: [
    makeExecutableSchema({
      typeDefs: scalarTypeDefs,
      resolvers: scalarResolvers,
    }),
    makeExecutableSchema({ typeDefs }),
  ],
});
