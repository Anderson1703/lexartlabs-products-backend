import { Request, Response } from 'express';
import { getAllProductsLogsService } from '../../services/products-logs/get-all.service';

export const getAllProductsLogsController = async (request: Request, response: Response) => {
    try {

        const { limit, offset } = request.query;

        if (!limit || !offset) throw {
            status: 400,
            message: "Missing query parameters: limit and offset are required"
        }

        const productsLogs = await getAllProductsLogsService({
            limit: Number(limit),
            offset: Number(offset),
            order: [["createdAt", "DESC"]],
            attributes: ["uuid", "product", "createdAt"]
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
