import { Request, Response } from 'express';
import { loginUserService } from '../../services/auth/login.service';

export const loginUserController = async (request: Request, response: Response) => {
    try {
        const { email, password } = request.body;

        if (email && password) {

            const user = await loginUserService({
                where: {
                    email: email
                }
            })

            response.status(200).json({
                status: 200,
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