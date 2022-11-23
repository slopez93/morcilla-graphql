import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Food {
  @Field((type) => ID)
  public id: string;

  @Field()
  public name: string;

  @Field()
  public url: string;

  constructor(id: string, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}
