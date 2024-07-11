import { DECIMAL, STRING } from "sequelize";
import sequelize from "../connection";

const Product = sequelize.define("product", {
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
    }
})

export default Product;