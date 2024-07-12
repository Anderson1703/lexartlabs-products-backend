import { FindOptions } from "sequelize";
import { Product } from "../../database/models/product.model";

export const getOneProductService = async (options: FindOptions) => {
    
    const user = await Product.findOne(options)
        .catch(err => {
            console.log("error on getOneProductService: ", err)
            return undefined
        });

    if (user === undefined) return Promise.reject({ message: 'Server error while get one product' });

    if (user === null) return Promise.reject({ message: 'Product not found', status: 404 });

    return user;
}