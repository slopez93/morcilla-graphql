import { GqlContext } from "../context";

export const resolvers = {
  Query: {
    async shoppingList(
      _root: void,
      _args: void,
      { services: { shoppingListService } }: GqlContext
    ) {
      try {
        return await shoppingListService.getShoppingList();
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
};
