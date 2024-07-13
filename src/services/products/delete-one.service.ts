import { FindOptions } from "sequelize"
import { Product } from "../../database/models/product.model"

export const deleteOneProductService = async (options: FindOptions) => {
    try {
        const product = await Product.findOne(options);

        if (!product) throw {
            status: 404,
            message: 'Product not found'
        }

        await product.destroy();

    } catch (error) {

        return { message: "Server error while delete one product" };

    }
}