import { Request, Response } from "express";
import container from "../config/di";
import { FoodsService, FOODS_SERVICE } from "../modules/foods/services";
import {
  ShoppingListService,
  SHOPPING_LIST_SERVICE,
} from "../modules/shoppingList/services/ShoppingListService";

export interface GqlContext {
  services: {
    foodsService: FoodsService;
    shoppingListService: ShoppingListService;
  };
}

export const buildContext = async ({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<GqlContext> => {
  return {
    services: {
      foodsService: container.get<FoodsService>(FOODS_SERVICE),
      shoppingListService: container.get<ShoppingListService>(
        SHOPPING_LIST_SERVICE
      ),
    },
  };
};
