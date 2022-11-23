import { Service } from "typedi";
import { Food } from "../../domain/entities/Food";
import { ShoppingList } from "../../domain/entities/ShoppingList";
import {
  ShoppingListRepository,
  SHOPPING_REPOSITORY,
} from "../../domain/repositories/ShoppingListRepository";

@Service(SHOPPING_REPOSITORY)
export class InMemoryShoppingListRepository implements ShoppingListRepository {
  private shoppingList: ShoppingList;

  constructor() {
    this.shoppingList = new ShoppingList(
      "1",
      [
        new Food("1", "food 1", "url"),
        new Food("2", "food 2", "url"),
        new Food("3", "food 3", "url"),
      ],
      new Date()
    );
  }

  async getShoppingListByDate(date: Date): Promise<ShoppingList> {
    return this.shoppingList;
  }
}
