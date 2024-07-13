import { Request, Response } from 'express';
import { deleteOneProductService } from '../../services/products/delete-one.service';

export const deleteOneProductController = async (request: Request, response: Response) => {
    try {
        
        const { productUUID } = request.params;

        if (productUUID) {

            await deleteOneProductService({
                where: {
                    uuid: productUUID
                }
            })

            response.status(200).json({
                status: 200,
                body: {
                    message: "Product deleted successful"
                }
            })

        } else {
            throw {
                status: 400,
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