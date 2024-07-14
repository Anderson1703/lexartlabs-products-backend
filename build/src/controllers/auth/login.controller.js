"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = void 0;
const login_service_1 = require("../../services/auth/login.service");
const bcrypt_utils_1 = require("../../utils/bcrypt.utils");
const jsonwebtoken_1 = require("jsonwebtoken");
const loginUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = request.body;
        if (email && password) {
            const user = yield (0, login_service_1.loginUserService)({
                where: {
                    email: email
                }
            });
            const isPasswordCorrect = yield (0, bcrypt_utils_1.comparePassword)(password, user);
            if (!isPasswordCorrect)
                throw {
                    status: 401,
                    message: "Credentials invalid"
                };
            (0, jsonwebtoken_1.sign)({ user: user }, process.env.SECRET_KEY_USER, { expiresIn: "1d" }, (error, tok) => {
                if (!error && tok) {
                    response.status(200).json({
                        status: 200,
                        body: {
                            auth: true,
                            token: tok
                        }
                    });
                }
                else {
                    throw new Error();
                }
            });
        }
        else {
            throw {
                status: 400,
                message: "Server is missing properties"
            };
        }
    }
    catch (error) {
        response.status(error.status || 500).json({
            status: error.status || 500,
            body: {
                error: {
                    message: error.message || 'Server error'
                }
            }
        });
    }
});
exports.loginUserController = loginUserController;
