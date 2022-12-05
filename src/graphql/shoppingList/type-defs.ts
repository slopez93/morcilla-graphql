import gql from "graphql-tag";

export const typeDefs = gql`

    extend type Query {
        shoppingList: ShoppingList
    }
    
    type ShoppingList {
        id: ID!
        foods: [Food]
        createdAt: Date
    }



`;
