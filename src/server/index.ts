import express, { Response, Request } from 'express';
import root from '../routes/index'
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from '../utils/swagger.utils';

const server = express();
const swaggerDocs = swaggerJSDoc(swaggerOptions);

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json())
server.use('/api', root);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;