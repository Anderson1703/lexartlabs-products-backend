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
exports.createProductController = void 0;
const create_service_1 = require("../../services/products/create.service");
const uuid_utils_1 = require("../../utils/uuid.utils");
const createProductController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, stock, release_date } = request.body;
        if (name && description && price && stock && release_date) {
            const uuid = (0, uuid_utils_1.generateUUID)();
            yield (0, create_service_1.createProductService)(uuid, { name, description, price, stock, release_date });
            response.status(200).json({
                status: 201,
                body: {
                    message: "Product created successful"
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
exports.createProductController = createProductController;
