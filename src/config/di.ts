import { Container } from "inversify";
import { FoodsService, FOODS_SERVICE } from "../modules/foods";

const container = new Container();

container.bind<FoodsService>(FOODS_SERVICE).to(FoodsService);

export default container;
