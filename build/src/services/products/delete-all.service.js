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
exports.deleteAllProductsService = void 0;
const product_model_1 = require("../../database/models/product.model");
const get_all_service_1 = require("../products-logs/get-all.service");
const uuid_utils_1 = require("../../utils/uuid.utils");
const create_service_1 = require("../products-logs/create.service");
const deleteAllProductsService = (options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, get_all_service_1.getAllProductsLogsService)({});
        if (products.length === 0)
            Promise.reject({ message: 'No products to delete', status: 404 });
        yield product_model_1.Product.destroy(options);
        const uuid = (0, uuid_utils_1.generateUUID)();
        yield (0, create_service_1.createProductLogService)(uuid, { products: products });
    }
    catch (error) {
        return { message: "Server error while delete all products" };
    }
});
exports.deleteAllProductsService = deleteAllProductsService;
