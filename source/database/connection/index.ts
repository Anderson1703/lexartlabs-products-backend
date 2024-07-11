import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db-name", "db-user", "db-password", {
    host: "db-host",
    dialect: "postgres"
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });

export default sequelize;