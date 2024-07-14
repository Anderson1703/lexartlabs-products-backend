import { FindOptions } from "sequelize"
import { Product } from "../../database/models/product.model"

export const updateOneProductService = async (options: FindOptions, data: any) => {
    try {
        
        const product = await Product.findOne(options);

        if (!product) throw {
            status: 404,
            message: 'Product not found'
        }

        await product.update(data);

    } catch (error) {

        return { message: "Server error while update one product" };

    }
}