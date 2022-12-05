"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const FoodsDb_1 = require("../modules/foods/db/FoodsDb");
const services_1 = require("../modules/foods/services");
const container = new inversify_1.Container();
container.bind(services_1.FOODS_SERVICE).to(services_1.FoodsService);
container.bind(FoodsDb_1.FOODS_DB).to(FoodsDb_1.FoodsDb);
exports.default = container;
