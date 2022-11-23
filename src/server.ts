import { ApolloServer } from "@apollo/server";
import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import { schema } from "./graphql/schema";

const bootstrap = async () => {
  // Create GraphQL server
  const server = new ApolloServer({ schema });

  return server;
};

export const graphql = async (event: any, context: any, callback: any) => {
  const server = await bootstrap();

  return startServerAndCreateLambdaHandler(server)(event, context, callback);
};
