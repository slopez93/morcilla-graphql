import Container from "typedi";
import { FOOD_REPOSITORY } from "../../domain/repositories/FoodsRepository";
import { SHOPPING_REPOSITORY } from "../../domain/repositories/ShoppingListRepository";
import { InMemoryFoodsRepository } from "../../infrastructure/persistence/InMemoryFoodsRepository";
import { InMemoryShoppingListRepository } from "../../infrastructure/persistence/InMemoryShoppingListRepository";

export const registerDependencies = (container: typeof Container) => {
  container.set(FOOD_REPOSITORY, new InMemoryFoodsRepository());
  container.set(SHOPPING_REPOSITORY, new InMemoryShoppingListRepository());
};
