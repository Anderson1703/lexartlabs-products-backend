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
exports.getAllProductsController = void 0;
const get_all_service_1 = require("../../services/products/get-all.service");
const sequelize_1 = require("sequelize");
const getAllProductsController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, offset, priceFrom, priceTo, releaseDate } = request.query;
        let where = {};
        if (!limit || !offset)
            throw {
                status: 400,
                message: "Missing query parameters: limit and offset are required"
            };
        where = Object.assign(Object.assign({}, (releaseDate && { release_date: new Date(releaseDate) })), ((priceFrom && priceTo) && {
            price: {
                [sequelize_1.Op.gte]: Number(priceFrom),
                [sequelize_1.Op.lte]: Number(priceTo)
            }
        }));
        const products = yield (0, get_all_service_1.getAllProductsService)({
            where,
            limit: Number(limit),
            offset: Number(offset),
            order: [["createdAt", "DESC"]],
            attributes: ["uuid", "name", "description", "price", "stock", "release_date", "createdAt"]
        });
        response.status(200).json({
            status: 200,
            body: {
                data: products
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
exports.getAllProductsController = getAllProductsController;
