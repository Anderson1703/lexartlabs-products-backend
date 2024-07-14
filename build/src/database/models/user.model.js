"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../connection"));
exports.User = connection_1.default.define("users", {
    uuid: {
        type: sequelize_1.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    lastName: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: sequelize_1.STRING,
        allowNull: false,
        unique: true,
    }
});
