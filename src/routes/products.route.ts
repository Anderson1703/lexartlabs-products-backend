import { Router } from 'express';
import { getAllProductsController } from '../controllers/products/get-all.controller';
import getAccess from '../middlewares/auth.middleware';
import { createProductController } from '../controllers/products/create.controller';
import { getOneProductController } from '../controllers/products/get-one.controller';
import { deleteOneProductController } from '../controllers/products/delete-one.controller';
import { updateOneProductController } from '../controllers/products/update.controller';
import { deleteAllProductsController } from '../controllers/products/delete-all.controller';

const ProductsRouter = Router();

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
ProductsRouter.get("/", getAccess, getAllProductsController);

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
ProductsRouter.post("/", getAccess, createProductController);

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
ProductsRouter.delete("/", getAccess, deleteAllProductsController);

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
ProductsRouter.get("/:productUUID", getAccess, getOneProductController);

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
ProductsRouter.delete("/:productUUID", getAccess, deleteOneProductController);

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
ProductsRouter.patch("/:productUUID", getAccess, updateOneProductController);

export default ProductsRouter;