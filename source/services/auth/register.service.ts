import { User } from "../../database/models/user.model"

interface registerUserServiceI {
    name: string,
    lastName: string,
    email: string,
    password: string
}

export const registerUserService = async (data: registerUserServiceI) => {

    const user = await User.create({ ...data }, { raw: true })
        .catch(err => {
            console.log("error on registerUserService: ", err)
            return undefined
        });

    if (user === undefined) return Promise.reject({ message: 'Server error while register user' })

    return user;

}