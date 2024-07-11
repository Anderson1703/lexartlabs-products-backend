import {Request, Response, Router} from 'express';

const ProductsRouter = Router();

ProductsRouter.route("/")
    .get(async (request:Request, response: Response)=>{
        
    })  

export default ProductsRouter;