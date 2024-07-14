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
exports.updateOneProductController = void 0;
const update_service_1 = require("../../services/products/update.service");
const updateOneProductController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productUUID } = request.params;
        const data = request.body;
        if (productUUID && data) {
            yield (0, update_service_1.updateOneProductService)({
                where: {
                    uuid: productUUID
                }
            }, data);
            response.status(200).json({
                status: 200,
                body: {
                    message: "Product updated successful"
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
exports.updateOneProductController = updateOneProductController;
