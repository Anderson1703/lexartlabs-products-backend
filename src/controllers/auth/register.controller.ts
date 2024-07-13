import { Request, Response } from 'express';
import { registerUserService } from '../../services/auth/register.service';
import { encryptPassword } from '../../utils/bcrypt.utils';
import { RegisterUserBodyI } from '../../interfaces/auth.interface';
import { generateUUID } from '../../utils/uuid.utils';

export const registerUserController = async (request: Request, response: Response) => {
    try {

        const { name, lastName, email, password }: RegisterUserBodyI = request.body;

        if (name && lastName && email && password) {

            const uuid = generateUUID();

            const passwordEncrypt = await encryptPassword(password);

            await registerUserService(uuid, { name, lastName, email, password: passwordEncrypt })

            response.status(200).json({
                status: 201,
                body: {
                    message: "User registered successful"
                }
            })

        } else {
            throw {
                status: 400,
                message: "Server is missing properties"
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