import { GqlContext } from "../context";
import { AddFoodToShoppingListInput } from "./inputs/AddFoodToShoppingList";

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
  Mutation: {
    async addFoodToShoppingList(
      _root: void,
      { foodId }: AddFoodToShoppingListInput,
      { services: { shoppingListService } }: GqlContext
    ) {
      console.log(foodId);
      return null;
    },
  },
};
