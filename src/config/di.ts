import { Container } from "inversify";
import { FoodsDb, FOODS_DB } from "../modules/foods/db/FoodsDb";
import { FoodsService, FOODS_SERVICE } from "../modules/foods/services";
import {
  ShoppingListDb,
  SHOPPING_LIST_DB,
} from "../modules/shoppingList/db/ShoppingListDb";
import {
  ShoppingListService,
  SHOPPING_LIST_SERVICE,
} from "../modules/shoppingList/services/ShoppingListService";

const container = new Container();

container.bind<FoodsService>(FOODS_SERVICE).to(FoodsService);
container.bind<FoodsDb>(FOODS_DB).to(FoodsDb);

container
  .bind<ShoppingListService>(SHOPPING_LIST_SERVICE)
  .to(ShoppingListService);
container.bind<ShoppingListDb>(SHOPPING_LIST_DB).to(ShoppingListDb);

export default container;
