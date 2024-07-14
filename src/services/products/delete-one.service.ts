import { DestroyOptions } from "sequelize"
import { Product } from "../../database/models/product.model"
import { createProductLogService } from "../products-logs/create.service";
import { generateUUID } from "../../utils/uuid.utils";

export const deleteOneProductService = async (options: DestroyOptions) => {
    try {

        const product = await Product.findOne(options);

        if (!product) throw {
            status: 404,
            message: 'Product not found'
        }

        await product.destroy();

        const uuid = generateUUID();

        await createProductLogService(uuid, {products: JSON.stringify([product])})

    } catch (error) {

        return { message: "Server error while delete one product" };

    }
}