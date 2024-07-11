import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

/**
 * this middleware have the control on the access to the routes
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getAccess = async (req: Request, res: Response, next: NextFunction) => {
    const tokenRequired = req.headers["x-access-token"];
    if (tokenRequired) {
        jwt.verify(tokenRequired as string, process.env.SECRET_KEY_USER as string, (err, result) => {
            if (result) {
                req.params.user_id = "result";
                next();
            } else if (err) {
                console.log(err);
                res.status(406).json({ status: 406,  message: "this user is not auth" });
            }
        })

    } else { res.status(406).json({ status: 406, message: "x-access-token is required" }) }
}

export default getAccess;