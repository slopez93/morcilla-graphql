import { inject, injectable } from "inversify";
import AWS from "aws-sdk";
import { formatISO } from "date-fns";
import { ShoppingList } from "../models/ShoppingList";
import { AUTOMAPPER, AutoMapper } from "../../../shared/automapper";
import { ShoppingListDto } from "../dtos/ShoppingListDto";
import { randomUuuid } from "../../../shared/uuid";

@injectable()
export class ShoppingListDb {
  private readonly tableName = "Morcilla";

  constructor(@inject(AUTOMAPPER) private automapper: AutoMapper) {}

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

    return this.automapper.mapper.map(dbItem, ShoppingListDto, ShoppingList);
  }

  public async save(shoppingList: ShoppingList) {
    const dynamoDbConfig = {
      Item: {
        pk: `SHOPPING_LIST#${shoppingList.createdAt.toISOString()}`,
        sk: `SHOPPING_LIST#${shoppingList.id}`,
        id: shoppingList.id,
        foods: shoppingList.foods,
        createdAt: shoppingList.createdAt.toISOString(),
      },
      TableName: this.tableName,
    };

    await new AWS.DynamoDB.DocumentClient().put(dynamoDbConfig).promise();
  }
}

export const SHOPPING_LIST_DB = Symbol("SHOPPING_LIST_DB");
