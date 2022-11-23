import { Service } from "typedi";
import { Food } from "../../domain/entities/Food";
import {
  FoodsRepository,
  FOOD_REPOSITORY,
} from "../../domain/repositories/FoodsRepository";

const FOODS = [
  new Food("1", "food 1", "url"),
  new Food("2", "food 2", "url"),
  new Food("3", "food 3", "url"),
];

@Service(FOOD_REPOSITORY)
export class InMemoryFoodsRepository implements FoodsRepository {
  private foods: Food[];

  constructor() {
    this.foods = FOODS;
  }

  async save(food: Food): Promise<void> {
    this.foods.push(food);
  }

  async getAll(): Promise<Food[]> {
    return this.foods;
  }
}
