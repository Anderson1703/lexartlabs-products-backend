import { Request, Response } from 'express';
import { registerUserService } from '../../services/auth/register.service';

export const registerUserController = async (request: Request, response: Response) => {
    try {
        const { name, lastName, email, password } = request.body;

        if (name && lastName && email && password) {

            const user = await registerUserService({ name, lastName, email, password })

            response.status(200).json({
                status: 201,
                body: user
            })

        } else {
            Promise.reject({
                status: 406,
                message: "Server is missing properties"
            })
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