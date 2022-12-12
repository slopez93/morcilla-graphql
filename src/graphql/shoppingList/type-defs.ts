import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    shoppingList: ShoppingList
  }

  extend type Mutation {
    addFoodToShoppingList(foodId: String!): Void
  }

  type ShoppingList {
    id: ID!
    foods: [Food]
    createdAt: Date
  }
`;
