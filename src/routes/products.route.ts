import { Router } from 'express';
import { getAllProductsController } from '../controllers/products/get-all.controller';
import getAccess from '../middlewares/auth.middleware';
import { createProductController } from '../controllers/products/create.controller';
import { getOneProductController } from '../controllers/products/get-one.controller';
import { deleteOneProductController } from '../controllers/products/delete-one.controller';

const ProductsRouter = Router();

ProductsRouter.get("/", getAccess, getAllProductsController);

ProductsRouter.post("/", getAccess, createProductController);

ProductsRouter.get("/:productUUID", getAccess, getOneProductController);

ProductsRouter.patch("/:productUUID", getAccess, deleteOneProductController);

export default ProductsRouter;