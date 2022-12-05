import { Food } from "../../foods/models/Food";

export interface ShoppingList {
  id: string;
  foods: Food[];
  createdAt: Date;
}
