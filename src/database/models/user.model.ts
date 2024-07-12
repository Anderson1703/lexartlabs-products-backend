import { STRING } from "sequelize";
import sequelize from "../connection";

export const User = sequelize.define("User", {
    uuid: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    lastName: {
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: STRING,
        allowNull: false,
        unique: true,
    }
})