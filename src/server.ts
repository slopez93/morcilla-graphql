import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import serverlessExpress from "@vendia/serverless-express";
import express from "express";
import { json } from "body-parser";
import cors from "cors";

import { schema } from "./graphql/schema";
import { buildContext, GqlContext } from "./graphql/context";

const server = new ApolloServer<GqlContext>({
  schema,
});

server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();

const app = express();
app.use(
  cors(),
  json(),
  expressMiddleware(server, {
    context: buildContext,
  })
);
export const graphql = serverlessExpress({ app });
