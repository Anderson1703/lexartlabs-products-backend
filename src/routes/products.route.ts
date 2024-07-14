import { Router } from 'express';
import { getAllProductsController } from '../controllers/products/get-all.controller';
import getAccess from '../middlewares/auth.middleware';
import { createProductController } from '../controllers/products/create.controller';
import { getOneProductController } from '../controllers/products/get-one.controller';
import { deleteOneProductController } from '../controllers/products/delete-one.controller';
import { updateOneProductController } from '../controllers/products/update.controller';
import { deleteAllProductsController } from '../controllers/products/delete-all.controller';

const ProductsRouter = Router();

ProductsRouter.get("/", getAccess, getAllProductsController);

ProductsRouter.post("/", getAccess, createProductController);

ProductsRouter.delete("/", getAccess, deleteAllProductsController);

ProductsRouter.get("/:productUUID", getAccess, getOneProductController);

ProductsRouter.delete("/:productUUID", getAccess, deleteOneProductController);

ProductsRouter.patch("/:productUUID", getAccess, updateOneProductController);

export default ProductsRouter;