import { Request, Response } from 'express';
import { getOneUserService } from '../../services/users/get-one.service';

export const getOneUserController = async (request: Request, response: Response) => {
    try {
        const { user_id } = request.params;

        if (user_id) {

            const user = await getOneUserService({
                where: {
                    id: user_id
                }
            })

            response.status(200).json({
                status: 200,
                body: user
            })

        } else {
            throw {
                status: 406,
                message: "Server is missing properties (user id)"
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