require("../database/connection/index")
import express, { Request, Response } from 'express';
import root from '../routes/index'
import cors from 'cors';
const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json())

server.use('/api', root);

server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;