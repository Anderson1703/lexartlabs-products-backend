import { Request, Response } from 'express';
import { registerUserService } from '../../services/auth/register.service';
import { encryptPassword } from '../../utils/bcrypt.utils';

export const registerUserController = async (request: Request, response: Response) => {
    try {
        const { name, lastName, email, password } = request.body;

        if (name && lastName && email && password) {

            const passwordEncrypt = await encryptPassword(password)

            await registerUserService({ name, lastName, email, password: passwordEncrypt })

            response.status(200).json({
                status: 201,
                body: {
                    message:"User registered successful"
                }
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