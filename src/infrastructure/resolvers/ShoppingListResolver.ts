import { Args, Query, Resolver, Root, Subscription } from "type-graphql";
import { Inject, Service } from "typedi";
import { ShoppingList } from "../../domain/entities/ShoppingList";
import {
  ShoppingListRepository,
  SHOPPING_REPOSITORY,
} from "../../domain/repositories/ShoppingListRepository";

@Service()
@Resolver()
export class ShoppingListResolver {
  constructor(
    @Inject(SHOPPING_REPOSITORY) private repository: ShoppingListRepository
  ) {}

  @Query((returns) => ShoppingList)
  async shoppingList(): Promise<ShoppingList> {
    return await this.repository.getShoppingListByDate(new Date());
  }

  @Subscription({ topics: "NEW_FOOD_CREATED" })
  newFoodAdded(
    @Root() notificationPayload: ShoppingList,
  ): ShoppingList {
    console.warn("NEW FOOD ADDED EVENT");

    return notificationPayload;
  }
}
