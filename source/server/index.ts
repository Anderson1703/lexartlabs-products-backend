require("../database/connection/index")
import express, { Response } from 'express';
import root from '../routes/index'
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from '../utils/swagger';
const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json())

const swaggerDocs = swaggerJSDoc(swaggerOptions);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.use('/api', root);

server.get('/', (res: Response) => {
    res.redirect('/api');
});

export default server;