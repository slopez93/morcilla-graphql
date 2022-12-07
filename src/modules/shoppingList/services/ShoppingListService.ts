import { inject, injectable } from "inversify";
import { ShoppingListDb, SHOPPING_LIST_DB } from "../db/ShoppingListDb";

@injectable()
export class ShoppingListService {
  constructor(
    @inject(SHOPPING_LIST_DB) private shoppingListDb: ShoppingListDb
  ) {}

  public async getShoppingList() {
    return await this.shoppingListDb.getShoppingList();
  }
}

export const SHOPPING_LIST_SERVICE = Symbol("SHOPPING_LIST_SERVICE");
