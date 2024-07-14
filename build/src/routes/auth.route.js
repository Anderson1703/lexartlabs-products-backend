"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/auth/login.controller");
const register_controller_1 = require("../controllers/auth/register.controller");
const AuthRouter = (0, express_1.Router)();
AuthRouter.post("/login", login_controller_1.loginUserController);
AuthRouter.post("/register", register_controller_1.registerUserController);
exports.default = AuthRouter;
