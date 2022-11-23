import { injectable } from "inversify";

@injectable()
export class FoodsService {
  public async getFoods() {
    return Promise.resolve([{ id: "1", name: "food 100", url: "url" }]);
  }
}

export const FOODS_SERVICE = Symbol("FOODS_SERVICE");
