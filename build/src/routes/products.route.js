"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_all_controller_1 = require("../controllers/products/get-all.controller");
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const create_controller_1 = require("../controllers/products/create.controller");
const get_one_controller_1 = require("../controllers/products/get-one.controller");
const delete_one_controller_1 = require("../controllers/products/delete-one.controller");
const update_controller_1 = require("../controllers/products/update.controller");
const delete_all_controller_1 = require("../controllers/products/delete-all.controller");
const ProductsRouter = (0, express_1.Router)();
ProductsRouter.get("/", auth_middleware_1.default, get_all_controller_1.getAllProductsController);
ProductsRouter.post("/", auth_middleware_1.default, create_controller_1.createProductController);
ProductsRouter.delete("/", auth_middleware_1.default, delete_all_controller_1.deleteAllProductsController);
ProductsRouter.get("/:productUUID", auth_middleware_1.default, get_one_controller_1.getOneProductController);
ProductsRouter.delete("/:productUUID", auth_middleware_1.default, delete_one_controller_1.deleteOneProductController);
ProductsRouter.patch("/:productUUID", auth_middleware_1.default, update_controller_1.updateOneProductController);
exports.default = ProductsRouter;
