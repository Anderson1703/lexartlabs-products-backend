import express, { Request, Response, Router } from 'express';
import AuthRouter from './auth.route';
import ProductsRouter from './products.route';
import UsersRouter from './users.route';

const root = Router();
const server = express();

root.get("/", (req: Request, res: Response) => {
    res.send("lexartlabs-products API");
})

server.use("/", root);
server.use("/products", ProductsRouter);
server.use("/auth", AuthRouter);
server.use("/users", UsersRouter);

export default server;