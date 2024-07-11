import express, { Request, Response, Router } from 'express';
import AuthRouter from './auth.route';
import ProductsRouter from './products.route';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from '../utils/swagger';

const root = Router();
const server = express();
const swaggerDocs = swaggerJSDoc(swaggerOptions);

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
server.get('/docs.json', (res: Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerDocs)
})

root.get("/", (req: Request, res: Response) => {
    res.send("lexartlabs-products API");
})

server.use("/", root);
server.use("/products", ProductsRouter);
server.use("/auth", AuthRouter);
server.use("/users", AuthRouter);

export default server;