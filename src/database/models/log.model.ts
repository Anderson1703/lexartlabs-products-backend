import { STRING } from "sequelize";
import sequelize from "../connection";

export const Log = sequelize.define("logs", {
    uuid: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    products:{
        type: STRING,
        allowNull: false
    }
})