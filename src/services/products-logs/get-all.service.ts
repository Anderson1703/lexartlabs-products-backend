import { FindOptions } from "sequelize";
import { Log } from "../../database/models/log.model";

export const getAllProductsLogsService = async (options: FindOptions) => {

    const logs = await Log.findAll(options);

    if (!logs) return Promise.reject({ message: 'Server error while get all products logs' });

    return logs;
    
}