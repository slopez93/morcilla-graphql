"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildContext = void 0;
const di_1 = __importDefault(require("../config/di"));
const foods_1 = require("../modules/foods");
const buildContext = async ({ req, res, }) => {
    return {
        services: {
            foodsService: di_1.default.get(foods_1.FOODS_SERVICE),
        },
    };
};
exports.buildContext = buildContext;
