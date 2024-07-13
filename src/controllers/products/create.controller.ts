import { Request, Response } from 'express';
import { CreateProductBodyI } from '../../interfaces/products.interface';
import { createProductService } from '../../services/products/create.service';
import { generateUUID } from '../../utils/uuid.utils';

export const createProductController = async (request: Request, response: Response) => {
    try {

        const { name, description, price, stock, release_date }: CreateProductBodyI = request.body;

        if (name && description && price && stock && release_date) {

            const uuid = generateUUID();

            await createProductService(uuid, { name, description, price, stock, release_date });

            response.status(200).json({
                status: 201,
                body: {
                    message: "Product created successful"
                }
            });

        } else {
            throw {
                status: 406,
                message: "Server is missing properties"
            };
        }

    } catch (error: any) {
        response.status(error.status || 500).json({
            status: error.status || 500,
            body: {
                error: {
                    message: error.message || 'Server error'
                }
            }
        });
    }
}