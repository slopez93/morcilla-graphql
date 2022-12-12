import { inject, injectable } from "inversify";
import { FoodsDb, FOODS_DB } from "../../foods/db/FoodsDb";
import { ShoppingListDb, SHOPPING_LIST_DB } from "../db/ShoppingListDb";

@injectable()
export class ShoppingListService {
  constructor(
    @inject(SHOPPING_LIST_DB) private shoppingListDb: ShoppingListDb,
    @inject(FOODS_DB) private foodsDb: FoodsDb
  ) {}

  public async getShoppingList() {
    return await this.shoppingListDb.getShoppingList();
  }

  public async addFoodToShoppingList(foodId: string) {
    const food = await this.foodsDb.getFood(foodId);

    if (!food) {
      throw new Error("Food not found");
    }

    let currentShoppingList = await this.shoppingListDb.getShoppingList();

    if (!currentShoppingList) {
      throw new Error("Shopping list not exist");
    }

    const existFoodInList = currentShoppingList.foods.find(
      (f) => f.name.toLocaleLowerCase() === food.name.toLocaleLowerCase()
    );

    if (existFoodInList) {
      throw new Error(`Food ${food.name} already exist in the shooping list`);
    }

    currentShoppingList.foods.push(food);

    await this.shoppingListDb.save(currentShoppingList);
  }
}

export const SHOPPING_LIST_SERVICE = Symbol("SHOPPING_LIST_SERVICE");
