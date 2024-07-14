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
exports.registerUserController = void 0;
const register_service_1 = require("../../services/auth/register.service");
const bcrypt_utils_1 = require("../../utils/bcrypt.utils");
const uuid_utils_1 = require("../../utils/uuid.utils");
const registerUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastName, email, password } = request.body;
        if (name && lastName && email && password) {
            const uuid = (0, uuid_utils_1.generateUUID)();
            const passwordEncrypt = yield (0, bcrypt_utils_1.encryptPassword)(password);
            yield (0, register_service_1.registerUserService)(uuid, { name, lastName, email, password: passwordEncrypt });
            response.status(200).json({
                status: 201,
                body: {
                    message: "User registered successful"
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
exports.registerUserController = registerUserController;
