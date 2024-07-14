"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const get_one_controller_1 = require("../controllers/users/get-one.controller");
const UsersRouter = (0, express_1.Router)();
UsersRouter.get("/me", auth_middleware_1.default, get_one_controller_1.getOneUserController);
exports.default = UsersRouter;
