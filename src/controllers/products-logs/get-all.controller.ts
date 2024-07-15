import { Request, Response } from 'express';
import { getAllProductsLogsService } from '../../services/products-logs/get-all.service';

export const getAllProductsLogsController = async (request: Request, response: Response) => {
    try {
        
        const productsLogs = await getAllProductsLogsService({
            order: [["createdAt", "DESC"]],
            attributes: ["uuid", "products", "createdAt"]
        })

        response.status(200).json({
            status: 200,
            body: {
                data: productsLogs
            }
        })

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
