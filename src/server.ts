import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import Container from "typedi";
import { buildSchema } from "type-graphql";
import { FoodsResolver } from "./infrastructure/resolvers/FoodsResolver";
import { registerDependencies } from "./config/di";
import { ShoppingListResolver } from "./infrastructure/resolvers/ShoppingListResolver";

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [FoodsResolver, ShoppingListResolver],
    // register 3rd party IOC container
    container: Container,
  });

  registerDependencies(Container);

  // Create GraphQL server
  const server = new ApolloServer({ schema });

  return server;
};

export const graphql = async (event: any, context: any, callback: any) => {
  const server = await bootstrap();

  return startServerAndCreateLambdaHandler(server)(event, context, callback);
};
