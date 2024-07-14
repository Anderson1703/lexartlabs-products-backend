import { Router } from 'express';
import getAccess from '../middlewares/auth.middleware';
import { getAllProductsLogsController } from '../controllers/products-logs/get-all.controller';

const ProductsLogsRouter = Router();

ProductsLogsRouter.get("/", getAccess, getAllProductsLogsController);

export default ProductsLogsRouter;