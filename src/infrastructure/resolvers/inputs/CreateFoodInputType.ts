import { Field, InputType } from "type-graphql";
import { Food } from "../../../domain/entities/Food";

@InputType()
export class CreateFoodInputType implements Partial<Food> {
  @Field()
  name: string;
  
  @Field()
  url: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}
