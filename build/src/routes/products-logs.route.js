"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const get_all_controller_1 = require("../controllers/products-logs/get-all.controller");
const ProductsLogsRouter = (0, express_1.Router)();
ProductsLogsRouter.get("/", auth_middleware_1.default, get_all_controller_1.getAllProductsLogsController);
exports.default = ProductsLogsRouter;
