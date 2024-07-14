import { STRING } from "sequelize";
import sequelize from "../connection";

export const Log = sequelize.define("logs", {
    uuid: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    product:{
        type: STRING,
        allowNull: false
    }
})