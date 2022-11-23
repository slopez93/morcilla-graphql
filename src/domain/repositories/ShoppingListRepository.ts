import { ShoppingList } from "../entities/ShoppingList";

export interface ShoppingListRepository {
  getShoppingListByDate(date: Date): Promise<ShoppingList>;
}

export const SHOPPING_REPOSITORY = Symbol("SHOPPING_REPOSITORY").toString();
