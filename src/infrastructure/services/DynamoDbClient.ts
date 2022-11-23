import { DynamoDB } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocument,
  ExecuteStatementCommand,
  ExecuteStatementCommandInput,
} from "@aws-sdk/lib-dynamodb";
import { Service } from "typedi";

@Service()
export class DynamoDbClient {
  public client: DynamoDBDocument;

  constructor() {
    const ddbClient = new DynamoDB({
      region: "eu-west-1",
    });
    const ddbDocClient = DynamoDBDocument.from(ddbClient);
    this.client = ddbDocClient;
  }

  public async executeStatement(params: ExecuteStatementCommandInput) {
    try {
      const { Items } = await this.client.send(
        new ExecuteStatementCommand(params)
      );
      return Items;
    } catch (err: any) {
      console.error(err);
      if (err.name == "ConditionalCheckFailedException") {
        return [];
      } else {
        throw err;
      }
    }
  }
}
