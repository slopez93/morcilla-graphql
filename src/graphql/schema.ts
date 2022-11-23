import { mergeSchemas } from "@graphql-tools/schema";

import { foodsSchema } from "./foods";
import { baseSchema } from "./common";

export const schema = mergeSchemas({
  schemas: [baseSchema, foodsSchema],
});
