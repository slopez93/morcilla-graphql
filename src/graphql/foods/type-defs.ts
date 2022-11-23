import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    foods: [Food]
  }

  type Food {
    id: String
    name: String
    url: String
  }
`;
