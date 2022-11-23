import { Food } from "../entities/Food";

export interface FoodsRepository {
  getAll(): Promise<Food[]>;
  save(food: Food): Promise<void>;
}

export const FOOD_REPOSITORY = Symbol("FOOD_REPOSITORY").toString();
