"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const auth_route_1 = __importDefault(require("./auth.route"));
const products_route_1 = __importDefault(require("./products.route"));
const users_route_1 = __importDefault(require("./users.route"));
const products_logs_route_1 = __importDefault(require("./products-logs.route"));
const root = (0, express_1.Router)();
const server = (0, express_1.default)();
root.get("/", (req, res) => {
    res.send("lexartlabs-products API");
});
server.use("/", root);
server.use("/products", products_route_1.default);
server.use("/auth", auth_route_1.default);
server.use("/users", users_route_1.default);
server.use("/products-logs", products_logs_route_1.default);
exports.default = server;
