import { Food } from "../../foods/models/Food";

export class ShoppingList {
  id!: string;
  foods!: Food[];
  createdAt!: Date;
}
