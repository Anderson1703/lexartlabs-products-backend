import { DestroyOptions } from "sequelize"
import { Product } from "../../database/models/product.model"
import { getAllProductsLogsService } from "../products-logs/get-all.service";
import { generateUUID } from "../../utils/uuid.utils";
import { createProductLogService } from "../products-logs/create.service";

export const deleteAllProductsService = async (options: DestroyOptions) => {
    try {

        const products = await getAllProductsLogsService({});
        
        if (products.length === 0) Promise.reject({ message: 'No products to delete', status: 404 });

        await Product.destroy(options);

        const uuid = generateUUID();

        await createProductLogService(uuid, {products: JSON.stringify(products)})

    } catch (error) {

        return { message: "Server error while delete all products" };

    }
}