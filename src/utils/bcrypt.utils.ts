import bcrypt from 'bcrypt';

export const encryptPassword =  (password: string) => {
    return  bcrypt.hash(password, 10);
}

export const comparePassword =  (password: string, user: any) => {
    return bcrypt.compare(password, user.password);
}
