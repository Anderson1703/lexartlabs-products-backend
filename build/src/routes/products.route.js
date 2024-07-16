"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_all_controller_1 = require("../controllers/products/get-all.controller");
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const create_controller_1 = require("../controllers/products/create.controller");
const get_one_controller_1 = require("../controllers/products/get-one.controller");
const delete_one_controller_1 = require("../controllers/products/delete-one.controller");
const update_controller_1 = require("../controllers/products/update.controller");
const delete_all_controller_1 = require("../controllers/products/delete-all.controller");
const ProductsRouter = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API endpoints for user products
 */
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve a list of all products
 *     tags: [Products]
 *     parameters:
 *       - in: header
 *         name: x-access-token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token for authorization
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Limit the number of products returned
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           example: 0
 *         description: Offset the start of the returned products
 *     responses:
 *       200:
 *         description: List of products
 *       406:
 *         description: Not authorized
 *       400:
 *         description: Missing query parameters (limit and offset are required)
 *       500:
 *         description: Server error
 */
ProductsRouter.get("/", auth_middleware_1.default, get_all_controller_1.getAllProductsController);
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     parameters:
 *       - in: header
 *         name: x-access-token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token for authorization
 *     requestBody:
 *       description: Product data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *               - stock
 *               - release_date
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: number
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Product created successfully
 *       406:
 *         description: Not authorized
 *       400:
 *         description: Server is missing properties
 *       500:
 *         description: Server error
 */
ProductsRouter.post("/", auth_middleware_1.default, create_controller_1.createProductController);
/**
 * @swagger
 * /api/products:
 *   delete:
 *     summary: Delete all products
 *     tags: [Products]
 *     parameters:
 *       - in: header
 *         name: x-access-token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token for authorization
 *     responses:
 *       200:
 *         description: All products deleted successfully
 *       406:
 *         description: Not authorized
 *       404:
 *         description: Product not found for deletion
 *       500:
 *         description: Server error
 */
ProductsRouter.delete("/", auth_middleware_1.default, delete_all_controller_1.deleteAllProductsController);
/**
 * @swagger
 * /api/products/{productUUID}:
 *   get:
 *     summary: Retrieve a single product by UUID
 *     tags: [Products]
 *     parameters:
 *       - in: header
 *         name: x-access-token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token for authorization
 *       - in: path
 *         name: productUUID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product data
 *       400:
 *         description: Missing properties (product UUID)
 *       406:
 *         description: Not authorized
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
ProductsRouter.get("/:productUUID", auth_middleware_1.default, get_one_controller_1.getOneProductController);
/**
 * @swagger
 * /api/products/{productUUID}:
 *   delete:
 *     summary: Delete a single product by UUID
 *     tags: [Products]
 *     parameters:
 *       - in: header
 *         name: x-access-token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token for authorization
 *       - in: path
 *         name: productUUID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       400:
 *         description: Missing properties (product UUID)
 *       406:
 *         description: Unauthorized
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
ProductsRouter.delete("/:productUUID", auth_middleware_1.default, delete_one_controller_1.deleteOneProductController);
/**
 * @swagger
 * /api/products/{productUUID}:
 *   patch:
 *     summary: Update a single product by UUID
 *     tags: [Products]
 *     parameters:
 *       - in: header
 *         name: x-access-token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token for authorization
 *       - in: path
 *         name: productUUID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated product data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: number
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Missing properties
 *       406:
 *         description: Unauthorized
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
ProductsRouter.patch("/:productUUID", auth_middleware_1.default, update_controller_1.updateOneProductController);
exports.default = ProductsRouter;
