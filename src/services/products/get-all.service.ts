import { FindOptions } from "sequelize";
import { Product } from "../../database/models/product.model";

export const getAllProductsService = async (options: FindOptions) => {

    const products = await Product.findAll(options);

    if (!products) return Promise.reject({ message: 'Server error while get all products' });

    return products;
    
}