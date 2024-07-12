import { User } from "../../database/models/user.model"
import { RegisterUserBodyI } from "../../interfaces/auth.interface";

export const registerUserService = async (uuid: string, data: RegisterUserBodyI) => {

    const user = await User.create({ uuid: uuid, ...data })
        .catch(err => {
            console.log("error on registerUserService: ", err)
            return undefined
        });

    if (user === undefined) return Promise.reject({ message: 'Server error while register user' });

    return user;

}