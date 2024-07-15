import { Router } from 'express';
import getAccess from '../middlewares/auth.middleware';
import { getAllProductsLogsController } from '../controllers/products-logs/get-all.controller';

const ProductsLogsRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Products Logs
 *   description: API endpoints products deleted (products logs)
 */

/**
 * @swagger
 * /api/products-logs:
 *   get:
 *     summary: Get all products logs
 *     tags:
 *       - Products Logs
 *     parameters:
 *       - in: header
 *         name: x-access-token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token for authorization
 *     responses:
 *       '200':
 *         description: A list of products logs
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 body:
 *                   type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           uuid:
 *                             type: string
 *                             example: "1234567890"
 *                           products:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 uuid:
 *                                   type: string
 *                                   example: "9876543210"
 *                                 name:
 *                                   type: string
 *                                   example: "Product A"
 *                                 createdAt:
 *                                   type: string
 *                                   format: date-time
 *                                   example: "2024-07-15T12:00:00Z"
 *       '406':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 406
 *                 body:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: object
 *                       properties:
 *                         message:
 *                           type: string
 *                           example: Unauthorized
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 500
 *                 body:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: object
 *                       properties:
 *                         message:
 *                           type: string
 *                           example: Server error
 */
ProductsLogsRouter.get("/", getAccess, getAllProductsLogsController);

export default ProductsLogsRouter;