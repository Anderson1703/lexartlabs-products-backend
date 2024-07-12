import { Router } from 'express';
import { getAllProductsController } from '../controllers/products/get-all.controller';
import getAccess from '../middlewares/auth.middleware';
import { createProductController } from '../controllers/products/create.controller';
import { getOneProductController } from '../controllers/products/get-one.controller';

const ProductsRouter = Router();

ProductsRouter.get("/", getAccess, getAllProductsController);

ProductsRouter.post("/", getAccess, createProductController);

ProductsRouter.post("/:productUUID", getAccess, getOneProductController);


export default ProductsRouter;