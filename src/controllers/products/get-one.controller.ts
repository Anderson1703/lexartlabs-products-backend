import { Request, Response } from 'express';
import { getOneProductService } from '../../services/products/get-one.service';

export const getOneProductController = async (request: Request, response: Response) => {
    try {
        
        const { productUUID } = request.params;

        if (productUUID) {

            const product = await getOneProductService({
                where: {
                    uuid: productUUID
                },
                attributes: ["uuid", "name", "description", "price", "stock", "release_date"]
            })

            response.status(200).json({
                status: 200,
                body: product
            })

        } else {
            throw {
                status: 406,
                message: "Server is missing properties (product uuid)"
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