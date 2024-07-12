import { Request, Response } from 'express';
import { getOneUserService } from '../../services/users/get-one.service';

export const getOneUserController = async (request: Request, response: Response) => {
    try {
        
        const { userUUID } = request.params;

        if (userUUID) {

            const user = await getOneUserService({
                where: {
                    uuid: userUUID
                },
                attributes: ["uuid", "name", "lastName", "email"]
            })

            response.status(200).json({
                status: 200,
                body: user
            })

        } else {
            throw {
                status: 406,
                message: "Server is missing properties (user uuid)"
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