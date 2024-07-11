import { STRING } from "sequelize";
import sequelize from "../connection";

const User = sequelize.define("User", {
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