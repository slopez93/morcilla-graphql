"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOODS_DB = exports.FoodsDb = void 0;
const inversify_1 = require("inversify");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
let FoodsDb = class FoodsDb {
    tableName = "Morcilla";
    async getFoods() {
        const dynamoDbConfig = {
            FilterExpression: "begins_with(pk, :filter)",
            ExpressionAttributeValues: {
                ":filter": "FOOD#",
            },
            TableName: this.tableName,
        };
        const dbItems = await new aws_sdk_1.default.DynamoDB.DocumentClient()
            .scan(dynamoDbConfig)
            .promise();
        if (!dbItems.Items || dbItems.Items?.length === 0) {
            return [];
        }
        const dbItem = dbItems.Items;
        return dbItem.map((item) => ({
            id: item.id,
            name: item.name,
            image: item.image,
        }));
    }
};
FoodsDb = __decorate([
    (0, inversify_1.injectable)()
], FoodsDb);
exports.FoodsDb = FoodsDb;
exports.FOODS_DB = Symbol("FOODS_DB");
