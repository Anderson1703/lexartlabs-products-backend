import { JSONB, STRING } from "sequelize";
import sequelize from "../connection";

export const Log = sequelize.define("logs", {
    uuid: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    products:{
        type: JSONB,
        allowNull: false
    }
})