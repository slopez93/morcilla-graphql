import { FoodDto } from "../../foods/dtos/FoodDto";

export class ShoppingListDto {
  constructor(
    public id: string,
    public foods: FoodDto[],
    public createdAt: string
  ) {}
}
