import { injectable } from "inversify";
import AWS from "aws-sdk";
import { formatISO } from "date-fns";
import { ShoppingList } from "../models/ShoppingList";

@injectable()
export class ShoppingListDb {
  private readonly tableName = "Morcilla";

  public async getShoppingList(): Promise<ShoppingList | undefined> {
    const currentDate = formatISO(new Date(), { representation: "date" });

    const dynamoDbConfig = {
      FilterExpression: "pk = :shoppingList",
      ExpressionAttributeValues: {
        ":shoppingList": `SHOPPING_LIST#${currentDate}`,
      },
      TableName: this.tableName,
    };

    const dbItems = await new AWS.DynamoDB.DocumentClient()
      .scan(dynamoDbConfig)
      .promise();

    if (!dbItems.Items || dbItems.Items?.length === 0) {
      return;
    }

    const dbItem = dbItems.Items[0];

    return {
      id: dbItem.id,
      foods: dbItem.foods.map((food: any) => ({
        id: food.id,
        name: food.name,
        image: food.image,
      })),
      createdAt: dbItem.createdAt,
    };
  }
}

export const SHOPPING_LIST_DB = Symbol("SHOPPING_LIST_DB");
