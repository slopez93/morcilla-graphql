import { Field, ID, ObjectType } from "type-graphql";
import { Food } from "./Food";

@ObjectType()
export class ShoppingList {
  @Field((type) => ID)
  public id: string;

  @Field((type) => [Food])
  public foods: Food[];

  @Field()
  public createdAt: Date;

  constructor(id: string, foods: Food[], createdAt: Date) {
    this.id = id;
    this.foods = foods;
    this.createdAt = createdAt;
  }
}
