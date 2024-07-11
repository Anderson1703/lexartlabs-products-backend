import * as exps from 'express';
import { Request, Response } from 'express';
const root = exps.Router();
const server = exps.default();

root.get("/", (req: Request, res: Response) => {
    res.send("lexartlabs-products API");
})

server.use("/", root);
server.use("/products", () => { });
server.use("/user", () => { });

export default server;