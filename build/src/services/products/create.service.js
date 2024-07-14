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
exports.createProductService = void 0;
const product_model_1 = require("../../database/models/product.model");
const createProductService = (uuid, data) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.create(Object.assign({ uuid: uuid }, data))
        .catch(err => {
        console.log("error on createProductService: ", err);
        return undefined;
    });
    if (product === undefined)
        return Promise.reject({ message: 'Server error while create product' });
    return product;
});
exports.createProductService = createProductService;
