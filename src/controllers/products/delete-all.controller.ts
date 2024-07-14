import { Request, Response } from "express";
import { deleteAllProductsService } from "../../services/products/delete-all.service";

export const deleteAllProductsController = async (request: Request, response: Response) => {
    try {

        await deleteAllProductsService({
            where: {},
            truncate: true
        })

        response.status(200).json({
            status: 200,
            body: {
                message: 'All products deleted successfully'
            }
        });

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