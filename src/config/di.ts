import { Container } from "inversify";
import { FoodsDb, FOODS_DB } from "../modules/foods/db/FoodsDb";
import { FoodsProfile } from "../modules/foods/mappers/FoodsProfile";
import { FoodsService, FOODS_SERVICE } from "../modules/foods/services";
import {
  ShoppingListDb,
  SHOPPING_LIST_DB,
} from "../modules/shoppingList/db/ShoppingListDb";
import { ShoppingListProfile } from "../modules/shoppingList/mappers/ShoppingListProfile";
import {
  ShoppingListService,
  SHOPPING_LIST_SERVICE,
} from "../modules/shoppingList/services/ShoppingListService";
import { AUTOMAPPER, AutoMapper } from "../shared/automapper";
import { AUTOMAPPER_PROFILE } from "../shared/automapper/AutomapperProfile";

const container = new Container();

container.bind<FoodsService>(FOODS_SERVICE).to(FoodsService);
container.bind<FoodsDb>(FOODS_DB).to(FoodsDb);

container
  .bind<ShoppingListService>(SHOPPING_LIST_SERVICE)
  .to(ShoppingListService);
container.bind<ShoppingListDb>(SHOPPING_LIST_DB).to(ShoppingListDb);

container.bind<AutoMapper>(AUTOMAPPER).to(AutoMapper);
container.bind<FoodsProfile>(AUTOMAPPER_PROFILE).to(FoodsProfile);
container.bind<ShoppingListProfile>(AUTOMAPPER_PROFILE).to(ShoppingListProfile);

export default container;
