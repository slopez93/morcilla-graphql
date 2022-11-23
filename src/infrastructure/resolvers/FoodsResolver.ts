import { Arg, Int, Mutation, PubSub, PubSubEngine, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { Food } from "../../domain/entities/Food";
import {
  FoodsRepository,
  FOOD_REPOSITORY,
} from "../../domain/repositories/FoodsRepository";
import { CreateFoodInputType } from "./inputs/CreateFoodInputType";

@Service()
@Resolver(Food)
export class FoodsResolver {
  constructor(@Inject(FOOD_REPOSITORY) private repository: FoodsRepository) {}

  @Query((returns) => [Food])
  async foods(): Promise<Food[]> {
    return await this.repository.getAll();
  }

  @Mutation((returns) => Food)
  async createFood(
    @Arg("data") createFoodInput: CreateFoodInputType,
    @PubSub() pubSub: PubSubEngine
  ): Promise<Food> {
    const foods = await this.repository.getAll();
    const { name, url } = createFoodInput;

    const newFood = new Food(
      (Number(foods[foods.length - 1].id) + 1).toString(),
      name,
      url
    );

    await this.repository.save(newFood);
    await pubSub.publish("NEW_FOOD_CREATED", newFood);

    return newFood;
  }
}
