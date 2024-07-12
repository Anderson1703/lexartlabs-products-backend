import { Request, Response } from 'express';
import { loginUserService } from '../../services/auth/login.service';
import { comparePassword } from '../../utils/bcrypt.utils';
import { sign } from 'jsonwebtoken'
import { LoginUserBodyI } from '../../interfaces/auth.interface';


export const loginUserController = async (request: Request, response: Response) => {
    try {
        const { email, password }: LoginUserBodyI = request.body;

        if (email && password) {

            const user = await loginUserService({
                where: {
                    email: email
                }
            })

            const isPasswordCorrect = await comparePassword(password, user)

            if (!isPasswordCorrect) throw {
                status: 401,
                message: "Credentials invalid"
            }

            sign({ user: user }, process.env.SECRET_KEY_USER!, { expiresIn: "1d" }, (error, tok) => {
                if (!error && tok) {
                    response.status(200).json({
                        status: 200,
                        body: {
                            auth: true,
                            token: tok
                        }
                    })
                } else {
                    throw new Error();
                }
            })

        } else {
            throw {
                status: 406,
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