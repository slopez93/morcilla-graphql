import { mergeSchemas } from "@graphql-tools/schema";

import { baseSchema } from "./common";
import { foodsSchema } from "./foods";
import { shoppingListSchema } from "./shoppingList";

export const schema = mergeSchemas({
  schemas: [baseSchema, foodsSchema, shoppingListSchema],
});
