"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphql = void 0;
const server_1 = require("@apollo/server");
const aws_lambda_1 = require("@as-integrations/aws-lambda");
const schema_1 = require("./graphql/schema");
const bootstrap = async () => {
    // Create GraphQL server
    const server = new server_1.ApolloServer({ schema: schema_1.schema });
    return server;
};
const graphql = async (event, context, callback) => {
    const server = await bootstrap();
    return (0, aws_lambda_1.startServerAndCreateLambdaHandler)(server)(event, context, callback);
};
exports.graphql = graphql;
