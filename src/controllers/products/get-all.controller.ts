import { Request, Response } from 'express';
import { getAllProductsService } from '../../services/products/get-all.service';

export const getAllProductsController = async (request: Request, response: Response) => {
    try {

        const { limit, offset } = request.query

        const products = await getAllProductsService({
            limit: Number(limit),
            offset: Number(offset),
            attributes: ["uuid", "name", "description", "price", "stock", "release_date"]
        })

        response.status(200).json({
            status: 200,
            body: {
                data: products
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
