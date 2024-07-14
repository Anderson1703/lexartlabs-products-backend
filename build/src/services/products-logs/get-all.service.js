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
exports.getAllProductsLogsService = void 0;
const log_model_1 = require("../../database/models/log.model");
const getAllProductsLogsService = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const logs = yield log_model_1.Log.findAll(options);
    if (!logs)
        return Promise.reject({ message: 'Server error while get all products logs' });
    return logs;
});
exports.getAllProductsLogsService = getAllProductsLogsService;
