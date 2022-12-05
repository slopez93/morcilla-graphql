import { inject, injectable } from "inversify";
import { ShoppingListDb, SHOPPING_LIST_DB } from "../db/ShoppingListDb";

@injectable()
export class ShoppingListService {
  constructor(
    @inject(SHOPPING_LIST_DB) private shoppingListDb: ShoppingListDb
  ) {}

  public async getShoppingList() {
    const shoppingList = await this.shoppingListDb.getShoppingList();
    return shoppingList;
  }
}

export const SHOPPING_LIST_SERVICE = Symbol("SHOPPING_LIST_SERVICE");
