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
exports.getOneUserController = void 0;
const get_one_service_1 = require("../../services/users/get-one.service");
const getOneUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userUUID } = request.params;
        if (userUUID) {
            const user = yield (0, get_one_service_1.getOneUserService)({
                where: {
                    uuid: userUUID
                },
                attributes: ["uuid", "name", "lastName", "email"]
            });
            response.status(200).json({
                status: 200,
                body: {
                    data: user
                }
            });
        }
        else {
            throw {
                status: 400,
                message: "Server is missing properties (user uuid)"
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
exports.getOneUserController = getOneUserController;
