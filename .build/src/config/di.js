"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const foods_1 = require("../modules/foods");
const container = new inversify_1.Container();
container.bind(foods_1.FOODS_SERVICE).to(foods_1.FoodsService);
exports.default = container;
