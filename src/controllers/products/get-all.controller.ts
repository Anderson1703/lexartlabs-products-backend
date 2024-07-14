import { Request, Response } from 'express';
import { getAllProductsService } from '../../services/products/get-all.service';
import { Op, WhereOptions } from 'sequelize';

export const getAllProductsController = async (request: Request, response: Response) => {
    try {

        const { limit, offset, priceFrom, priceTo, releaseDate } = request.query;

        let where: WhereOptions<any> = {}

        if (!limit || !offset) throw {
            status: 400,
            message: "Missing query parameters: limit and offset are required"
        }

        where = {
            ...(releaseDate && { release_date: new Date(releaseDate as string) }),
            ...((priceFrom && priceTo) && {
                price: {
                    [Op.gte]: Number(priceFrom),
                    [Op.lte]: Number(priceTo)
                }
            })
        }

        console.log("where:", where)

        const products = await getAllProductsService({
            where,
            limit: Number(limit),
            offset: Number(offset),
            order: [["createdAt", "DESC"]],
            attributes: ["uuid", "name", "description", "price", "stock", "release_date", "createdAt"]
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
