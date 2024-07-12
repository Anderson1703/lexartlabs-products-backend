import { DECIMAL, STRING, INTEGER, DATE } from "sequelize";
import sequelize from "../connection";

export const Product = sequelize.define("product", {
    uuid: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    description: {
        type: STRING,
        allowNull: true
    },
    price: {
        type: DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: INTEGER,
        allowNull: false
    },
    release_date: {
        type: DATE,
        allowNull: true
    }
})