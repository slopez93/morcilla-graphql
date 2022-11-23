export const resolvers = {
  Query: {
    async foods() {
      return Promise.resolve([{ id: "1", name: "food 1", url: "url" }]);
    },
  },
};
