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
exports.getAllProductsLogsController = void 0;
const get_all_service_1 = require("../../services/products-logs/get-all.service");
const getAllProductsLogsController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, offset } = request.query;
        if (!limit || !offset)
            throw {
                status: 400,
                message: "Missing query parameters: limit and offset are required"
            };
        const productsLogs = yield (0, get_all_service_1.getAllProductsLogsService)({
            limit: Number(limit),
            offset: Number(offset),
            order: [["createdAt", "DESC"]],
            attributes: ["uuid", "products", "createdAt"]
        });
        response.status(200).json({
            status: 200,
            body: {
                data: productsLogs
            }
        });
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
exports.getAllProductsLogsController = getAllProductsLogsController;
