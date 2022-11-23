"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphql = void 0;
// import { ApolloServer } from "@apollo/server";
// import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
// import { json } from "body-parser";
require("reflect-metadata");
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const schema_1 = require("./graphql/schema");
const context_1 = require("./graphql/context");
const server = new server_1.ApolloServer({
    schema: schema_1.schema,
});
server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();
const app = (0, express_1.default)();
app.use((0, cors_1.default)(), (0, body_parser_1.json)(), (0, express4_1.expressMiddleware)(server, {
    context: context_1.buildContext,
}));
exports.graphql = (0, serverless_express_1.default)({ app });
