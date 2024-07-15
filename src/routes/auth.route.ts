import { Router } from 'express';
import { loginUserController } from '../controllers/auth/login.controller';
import { registerUserController } from '../controllers/auth/register.controller';

const AuthRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API endpoints for user authentication
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successfully logged in
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
 *                     auth:
 *                       type: boolean
 *                       example: true
 *                     token:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       '400':
 *         description: Missing properties on the server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 body:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: object
 *                       properties:
 *                         message:
 *                           type: string
 *                           example: Server is missing properties
 *       '401':
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 401
 *                 body:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: object
 *                       properties:
 *                         message:
 *                           type: string
 *                           example: Credentials invalid
 */
AuthRouter.post("/login", loginUserController);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 201
 *                 body:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: User registered successful
 *       '400':
 *         description: Missing properties on the server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 body:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: object
 *                       properties:
 *                         message:
 *                           type: string
 *                           example: Server is missing properties
 */
AuthRouter.post("/register", registerUserController);

export default AuthRouter;