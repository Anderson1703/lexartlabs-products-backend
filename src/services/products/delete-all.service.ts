import { DestroyOptions } from "sequelize"
import { Product } from "../../database/models/product.model"

export const deleteAllProductsService = async (options: DestroyOptions) => {
    try {
        
        await Product.destroy(options);

    } catch (error) {

        return { message: "Server error while delete all products" };

    }
}