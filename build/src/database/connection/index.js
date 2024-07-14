"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.POSTGRES_URL, {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    ssl: true
});
sequelize.sync({ force: false })
    .then(() => {
    console.log('Database synchronized');
})
    .catch((error) => {
    console.error('Failed to synchronize database:', error);
});
exports.default = sequelize;
