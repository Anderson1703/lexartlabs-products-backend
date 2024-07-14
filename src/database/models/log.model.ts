import { ARRAY, STRING } from "sequelize";
import sequelize from "../connection";

export const Log = sequelize.define("logs", {
    uuid: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    products:{
        type: ARRAY,
        allowNull: false
    }
})