import { GqlContext } from "../context";

export const resolvers = {
  Query: {
    async foods(
      _root: void,
      _args: void,
      { services: { foodsService } }: GqlContext
    ) {
      return await foodsService.getFoods();
    },
  },
};
