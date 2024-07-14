"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../connection"));
exports.Log = connection_1.default.define("logs", {
    uuid: {
        type: sequelize_1.STRING,
        allowNull: false,
        unique: true
    },
    products: {
        type: sequelize_1.JSONB,
        allowNull: false
    }
});
