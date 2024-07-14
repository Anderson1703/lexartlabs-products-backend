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
exports.createProductLogService = void 0;
const log_model_1 = require("../../database/models/log.model");
const createProductLogService = (uuid, data) => __awaiter(void 0, void 0, void 0, function* () {
    const log = yield log_model_1.Log.create(Object.assign({ uuid: uuid }, data))
        .catch(err => {
        console.log("error on createProductLogService: ", err);
        return undefined;
    });
    if (log === undefined)
        return Promise.reject({ message: 'Server error while create product log' });
    return log;
});
exports.createProductLogService = createProductLogService;
