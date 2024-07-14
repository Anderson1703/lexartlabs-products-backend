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
exports.getOneProductService = void 0;
const product_model_1 = require("../../database/models/product.model");
const getOneProductService = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield product_model_1.Product.findOne(options)
        .catch(err => {
        console.log("error on getOneProductService: ", err);
        return undefined;
    });
    if (user === undefined)
        return Promise.reject({ message: 'Server error while get one product' });
    if (user === null)
        return Promise.reject({ message: 'Product not found', status: 404 });
    return user;
});
exports.getOneProductService = getOneProductService;
