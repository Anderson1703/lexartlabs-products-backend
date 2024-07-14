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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * this middleware have the control on the access to the routes
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAccess = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenRequired = req.headers["x-access-token"];
    if (tokenRequired) {
        jsonwebtoken_1.default.verify(tokenRequired, process.env.SECRET_KEY_USER, (err, result) => {
            if (result) {
                req.params.userUUID = result.user.uuid;
                next();
            }
            else if (err) {
                console.log(err);
                res.status(406).json({ status: 406, message: "this user is not auth" });
            }
        });
    }
    else {
        res.status(406).json({ status: 406, message: "x-access-token is required" });
    }
});
exports.default = getAccess;
