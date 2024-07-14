import { Request, Response } from "express";
import { updateOneProductService } from "../../services/products/update.service";

export const updateOneProductController = async (request: Request, response: Response) => {
    try {

        const { productUUID } = request.params;

        const data = request.body;

        if (productUUID && data) {

            await updateOneProductService({
                where: {
                    uuid: productUUID
                }
            }, data);

            response.status(200).json({
                status: 200,
                body: {
                    message: "Product updated successful"
                }
            });

        } else {
            throw {
                status: 400,
                message: "Server is missing properties"
            }
        }

    } catch (error: any) {
        response.status(error.status || 500).json({
            status: error.status || 500,
            body: {
                error: {
                    message: error.message || 'Server error'
                }
            }
        })
    }
}
