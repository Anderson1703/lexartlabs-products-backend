"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../connection"));
exports.Product = connection_1.default.define("products", {
    uuid: {
        type: sequelize_1.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.STRING,
        allowNull: true
    },
    price: {
        type: (0, sequelize_1.DECIMAL)(10, 2),
        allowNull: false
    },
    stock: {
        type: sequelize_1.INTEGER,
        allowNull: false
    },
    release_date: {
        type: sequelize_1.DATE,
        allowNull: true
    }
});
