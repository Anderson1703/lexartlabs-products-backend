import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE!,
    process.env.POSTGRES_USER!,
    process.env.POSTGRES_PASSWORD!,
    {
        host: process.env.POSTGRES_HOST!,
        dialect: "postgres"
    }
);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });

export default sequelize;