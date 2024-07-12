import { Product } from "../../database/models/product.model";
import { CreateProductBodyI } from "../../interfaces/products.interface";

export const createProductService = async (uuid: string, data: CreateProductBodyI) => {

    const product = await Product.create({  uuid: uuid, ...data })
        .catch(err => {
            console.log("error on createProductService: ", err)
            return undefined
        });

    if (product === undefined) return Promise.reject({ message: 'Server error while create product' })

    return product;

}