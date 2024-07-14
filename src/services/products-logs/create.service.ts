import { Log } from "../../database/models/log.model";
import { CreateProductLogBodyI } from "../../interfaces/products-log.interface";

export const createProductLogService = async (uuid: string, data: CreateProductLogBodyI) => {

    const log = await Log.create({  uuid: uuid, ...data })
        .catch(err => {
            console.log("error on createProductLogService: ", err)
            return undefined
        });

    if (log === undefined) return Promise.reject({ message: 'Server error while create product log' })

    return log;

}