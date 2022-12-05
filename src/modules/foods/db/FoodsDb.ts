import { injectable } from "inversify";
import AWS from "aws-sdk";
import { Food } from "../models/Food";

@injectable()
export class FoodsDb {
  private readonly tableName = "Morcilla";

  public async getFoods(): Promise<Food[]> {
    const dynamoDbConfig = {
      FilterExpression: "begins_with(pk, :filter)",
      ExpressionAttributeValues: {
        ":filter": "FOOD#",
      },
      TableName: this.tableName,
    };

    const dbItems = await new AWS.DynamoDB.DocumentClient()
      .scan(dynamoDbConfig)
      .promise();

    if (!dbItems.Items || dbItems.Items?.length === 0) {
      return [];
    }

    const dbItem = dbItems.Items;

    return dbItem.map(
      (item) =>
        ({
          id: item.id,
          name: item.name,
          image: item.image,
        } as Food)
    );
  }

  public async create({ id, name, image }: Food) {
    const dynamoDbConfig = {
      Item: {
        pk: `FOOD#${id}`,
        sk: `FOOD#${id}`,
        id,
        name,
        image,
      },
      TableName: this.tableName,
    };

    await new AWS.DynamoDB.DocumentClient().put(dynamoDbConfig).promise();
  }
}

export const FOODS_DB = Symbol("FOODS_DB");
