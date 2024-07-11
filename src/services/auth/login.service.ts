import { FindOptions } from "sequelize";
import { User } from "../../database/models/user.model"

export const loginUserService = async (options: FindOptions) => {
    const user = await User.findOne(options)
        .catch(err => {
            console.log("error on loginUserService: ", err)
            return undefined
        });

    if (user === undefined) return Promise.reject({ message: 'Server error while login user' })
    if (user === null) return Promise.reject({ message: 'Credentials invalid', status: 401 })
    return user;
}